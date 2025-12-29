import React, { useRef } from "react";
import { Button, Text } from "@app/ui";
import { useNotifications } from "../../hooks/notifications/useNotifications";
import { Notification } from "../../@types/notification.type";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

type NotificationListProps = {
  onClose: () => void;
}

const getNotificationIcon = (type: Notification['type']) => {
  switch (type) {
    case 'payment_approved':
      return '💰';
    case 'appointment_created':
      return '📅';
    case 'appointment_cancelled':
      return '❌';
    default:
      return '🔔';
  }
};

const getNotificationColor = (type: Notification['type']) => {
  switch (type) {
    case 'payment_approved':
      return 'text-success';
    case 'appointment_created':
      return 'text-primary';
    case 'appointment_cancelled':
      return 'text-danger';
    default:
      return 'text-white';
  }
};

export function NotificationList({ onClose }: NotificationListProps) {
  const { notifications, unreadCount, isLoading, markAsRead, markAllAsRead } = useNotifications();
  const listRef = useRef<HTMLDivElement>(null);


  const handleMarkAsRead = async (id: string) => {
    await markAsRead(id);
  };

  const handleMarkAllAsRead = async () => {
    await markAllAsRead();
  };

  if (isLoading) {
    return (
      <div className="absolute right-0 top-full mt-2 w-96 max-h-[500px] overflow-y-auto bg-[#1a1a1a] border border-gray-600 rounded-lg shadow-lg z-50 p-4">
        <Text className="text-white text-center" as="p">Carregando notificações...</Text>
      </div>
    );
  }

  return (
    <div 
      ref={listRef}
      className="absolute right-0 top-full mt-2 w-96 max-h-[500px] overflow-hidden bg-[#1a1a1a] border border-gray-600 rounded-lg shadow-lg z-50 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-600">
        <Text className="text-white text-xl font-bold" as="h2">Notificações</Text>
        {unreadCount > 0 && (
          <Button
            onClick={handleMarkAllAsRead}
            className="btn-sm btn-outline-primary"
          >
            Marcar todas como lidas
          </Button>
        )}
      </div>

      {/* Lista */}
      <div className="overflow-y-auto flex-1">
        {notifications.length === 0 ? (
          <div className="p-8 text-center">
            <Text className="text-gray-400" as="p">Nenhuma notificação</Text>
          </div>
        ) : (
          <div className="divide-y divide-gray-600">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 hover:bg-gray-800/50 cursor-pointer transition-colors ${
                  !notification.isRead ? 'bg-gray-900/30' : ''
                }`}
                onClick={() => {
                  if (!notification.isRead) {
                    handleMarkAsRead(notification.id);
                  }
                }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{getNotificationIcon(notification.type)}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <Text 
                        className={`font-bold ${getNotificationColor(notification.type)}`} 
                        as="h3"
                      >
                        {notification.title}
                      </Text>
                      {!notification.isRead && (
                        <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1"></span>
                      )}
                    </div>
                    <Text className="text-gray-300 text-sm mt-1" as="p">
                      {notification.message}
                    </Text>
                    <Text className="text-gray-500 text-xs mt-2" as="span">
                      {dayjs(notification.createdAt).fromNow()}
                    </Text>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

