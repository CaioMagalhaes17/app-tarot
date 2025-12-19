import React from "react";
import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, Text } from "@app/ui";
import { Schedule } from "../../../@types/schedule.type";
import { Clock } from "lucide-react";

type ScheduleViewModalProps = {
  schedule?: Schedule;
  trigger?: React.ReactNode;
}

const weekDays = [
  { key: 'monday', label: 'Segunda-feira' },
  { key: 'tuesday', label: 'Terça-feira' },
  { key: 'wednesday', label: 'Quarta-feira' },
  { key: 'thursday', label: 'Quinta-feira' },
  { key: 'friday', label: 'Sexta-feira' },
  { key: 'saturday', label: 'Sábado' },
  { key: 'sunday', label: 'Domingo' },
] as const

export function ScheduleViewModal({ schedule, trigger }: ScheduleViewModalProps) {
  const hasSchedule = schedule && Object.keys(schedule).length > 0 && 
    Object.values(schedule).some(slots => slots && slots.length > 0)

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="btn-outline-primary flex flex-row gap-2">
            <Clock size={16} /> Ver Horários de Atendimento
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-[#1a1a1a] border-gray-600">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl font-bold">Horários de Atendimento</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          {!hasSchedule ? (
            <Text className="text-gray-400 text-center py-8" as="p">
              Nenhum horário de atendimento configurado
            </Text>
          ) : (
            weekDays.map(({ key, label }) => {
              const slots = schedule?.[key] || []
              if (slots.length === 0) return null

              return (
                <div key={key} className="border border-gray-600 rounded-lg p-4 bg-gray-900/30">
                  <Text className="text-white text-lg font-bold mb-3" as="h3">{label}</Text>
                  <div className="space-y-2">
                    {slots.map((slot, index) => (
                      <div key={index} className="flex items-center gap-2 text-white">
                        <Clock size={16} className="text-gray-400" />
                        <Text as="span">
                          {slot.start} - {slot.end}
                        </Text>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

