import { useEffect, useState, useCallback } from "react";
import { io, Socket } from "socket.io-client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Notification } from "../../@types/notification.type";
import { getAllNotifications } from "../../api/notifications/getAll";
import { markNotificationAsRead } from "../../api/notifications/markAsRead";
import { markAllNotificationsAsRead } from "../../api/notifications/markAllAsRead";

export function useNotifications() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [unreadCount, setUnreadCount] = useState(0);
  const queryClient = useQueryClient();

  // Busca notificações via API REST
  const { data: notificationsData, isLoading } = useQuery({
    queryKey: ['notifications'],
    queryFn: () => getAllNotifications(),
    refetchOnWindowFocus: true,
  });

  const notifications = notificationsData?.notifications || [];

  // Calcula contador de não lidas
  useEffect(() => {
    const unread = notifications.filter(n => !n.isRead).length;
    setUnreadCount(unread);
  }, [notifications]);

  // Configura WebSocket
  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      return;
    }

    const baseURL = window.location.hostname === 'localhost' 
      ? 'http://localhost:3000' 
      : 'https://app-tarot-backend.fly.dev';

    const newSocket = io(`${baseURL}/notifications`, {
      auth: {
        token: `Bearer ${token}`,
      },
      transports: ["websocket", "polling"],
    });

    newSocket.on("connect", () => {
      console.log("Conectado ao WebSocket de notificações");
    });

    newSocket.on("new_notification", (notification: Notification) => {
      console.log("Nova notificação recebida:", notification);
      
      // Atualiza o cache do React Query
      queryClient.setQueryData(['notifications'], (old: any) => {
        if (!old) return { notifications: [notification] };
        return {
          notifications: [notification, ...old.notifications]
        };
      });

      // Atualiza contador
      setUnreadCount(prev => prev + 1);

      // Aqui você pode adicionar um toast/alert se quiser
      // showNotificationToast(notification);
    });

    newSocket.on("notification_count", (data: { unreadCount: number }) => {
      console.log("Contador atualizado:", data.unreadCount);
      setUnreadCount(data.unreadCount);
    });

    newSocket.on("connect_error", (error) => {
      console.error("Erro ao conectar ao WebSocket:", error);
    });

    newSocket.on("disconnect", (reason) => {
      console.log("Desconectado do WebSocket:", reason);
      
      if (reason === "io server disconnect") {
        // Servidor desconectou, reconectar manualmente
        newSocket.connect();
      }
    });

    newSocket.on("reconnect", (attemptNumber) => {
      console.log("Reconectado após", attemptNumber, "tentativas");
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [queryClient]);

  // Função para marcar como lida
  const markAsRead = useCallback(async (id: string) => {
    try {
      await markNotificationAsRead(id);
      
      // Atualiza o cache
      queryClient.setQueryData(['notifications'], (old: any) => {
        if (!old) return old;
        return {
          notifications: old.notifications.map((n: Notification) =>
            n.id === id ? { ...n, isRead: true } : n
          )
        };
      });

      // Atualiza contador
      setUnreadCount(prev => Math.max(0, prev - 1));
    } catch (error) {
      console.error("Erro ao marcar notificação como lida:", error);
    }
  }, [queryClient]);

  // Função para marcar todas como lidas
  const markAllAsRead = useCallback(async () => {
    try {
      await markAllNotificationsAsRead();
      
      // Atualiza o cache
      queryClient.setQueryData(['notifications'], (old: any) => {
        if (!old) return old;
        return {
          notifications: old.notifications.map((n: Notification) => ({
            ...n,
            isRead: true
          }))
        };
      });

      // Zera contador
      setUnreadCount(0);
    } catch (error) {
      console.error("Erro ao marcar todas as notificações como lidas:", error);
    }
  }, [queryClient]);

  return {
    notifications,
    unreadCount,
    isLoading,
    markAsRead,
    markAllAsRead,
    refetch: () => queryClient.invalidateQueries({ queryKey: ['notifications'] })
  };
}

