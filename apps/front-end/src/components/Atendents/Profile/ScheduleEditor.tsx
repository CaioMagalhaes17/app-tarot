import { Button, Text, IconPlus, IconTrash } from "@app/ui";
import { Schedule } from "../../../@types/schedule.type";

type ScheduleEditorProps = {
  schedule: Schedule;
  onChange: (schedule: Schedule) => void;
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

export function ScheduleEditor({ schedule, onChange }: ScheduleEditorProps) {
  const addTimeSlot = (day: keyof Schedule) => {
    const currentSlots = schedule[day] || []
    onChange({
      ...schedule,
      [day]: [...currentSlots, { start: '09:00', end: '18:00' }]
    })
  }

  const removeTimeSlot = (day: keyof Schedule, index: number) => {
    const currentSlots = schedule[day] || []
    const newSlots = currentSlots.filter((_, i) => i !== index)
    onChange({
      ...schedule,
      [day]: newSlots.length > 0 ? newSlots : undefined
    })
  }

  const updateTimeSlot = (day: keyof Schedule, index: number, field: 'start' | 'end', value: string) => {
    const currentSlots = schedule[day] || []
    const updatedSlots = currentSlots.map((slot, i) => 
      i === index ? { ...slot, [field]: value } : slot
    )
    onChange({
      ...schedule,
      [day]: updatedSlots
    })
  }

  return (
    <div className="space-y-6">
      {weekDays.map(({ key, label }) => {
        const slots = schedule[key] || []
        return (
          <div key={key} className="border border-gray-600 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <Text className="text-white text-xl font-bold" as="h3">{label}</Text>
              <Button
                onClick={() => addTimeSlot(key)}
                className="btn-primary btn-sm flex flex-row gap-2"
              >
                <IconPlus /> Adicionar Horário
              </Button>
            </div>
            
            {slots.length === 0 ? (
              <Text className="text-gray-400" as="p">Nenhum horário configurado</Text>
            ) : (
              <div className="space-y-3">
                {slots.map((slot, index) => (
                  <div key={index} className="flex items-center gap-4 bg-gray-900/50 p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Text className="text-white" as="label">De:</Text>
                      <input
                        type="time"
                        value={slot.start}
                        onChange={(e) => updateTimeSlot(key, index, 'start', e.target.value)}
                        className="bg-black border border-gray-600 rounded-lg px-3 py-2 text-white"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Text className="text-white" as="label">Até:</Text>
                      <input
                        type="time"
                        value={slot.end}
                        onChange={(e) => updateTimeSlot(key, index, 'end', e.target.value)}
                        className="bg-black border border-gray-600 rounded-lg px-3 py-2 text-white"
                      />
                    </div>
                    <Button
                      onClick={() => removeTimeSlot(key, index)}
                      className="btn-danger btn-sm"
                    >
                      <IconTrash />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

