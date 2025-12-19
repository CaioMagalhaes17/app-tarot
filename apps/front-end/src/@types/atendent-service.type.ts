export type Service = {
  id: string;
  name: string;
  serviceImg: string;
}

export type AtendentService = {
  id: string;
  service: Service;
  description: string;
  price: number;
  isActive: boolean;
}

