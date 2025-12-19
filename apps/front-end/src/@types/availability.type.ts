export type AvailableSlot = {
  start: string;  // Formato HH:MM
  end: string;   // Formato HH:MM
}

export type AvailabilityDay = {
  date: string;  // Formato YYYY-MM-DD
  weekday: string; // "monday", "tuesday", etc.
  availableSlots: AvailableSlot[];
}

export type AvailabilityResponse = {
  days: AvailabilityDay[];
}

export type AvailabilityParams = {
  startDate: string;  // Formato YYYY-MM-DD
  endDate: string;     // Formato YYYY-MM-DD
}

