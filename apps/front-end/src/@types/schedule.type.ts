export type TimeSlot = {
  start: string;  // Formato HH:MM
  end: string;    // Formato HH:MM
}

export type Schedule = {
  monday?: TimeSlot[];
  tuesday?: TimeSlot[];
  wednesday?: TimeSlot[];
  thursday?: TimeSlot[];
  friday?: TimeSlot[];
  saturday?: TimeSlot[];
  sunday?: TimeSlot[];
}

