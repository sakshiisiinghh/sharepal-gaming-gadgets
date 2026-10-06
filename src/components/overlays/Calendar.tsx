import { useState } from 'react'
import { addMonths, formatMonthTitle, getMonthGrid, isSameDay, startOfDay } from '../../utils/dates'
import { ChevronLeftIcon, ChevronRightIcon } from '../icons'

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

interface CalendarProps {
  start: Date | null
  end: Date | null
  onSelectDate: (date: Date) => void
}

function Month({ month, start, end, onSelectDate }: CalendarProps & { month: Date }) {
  const today = startOfDay(new Date())

  return (
    <div className="flex-1">
      <h4 className="mb-4 text-center text-14 font-medium">{formatMonthTitle(month)}</h4>
      <div className="grid grid-cols-7 gap-y-3 text-center">
        {WEEKDAYS.map((day) => (
          <span key={day} className="text-12 font-medium text-neutral-400">
            {day}
          </span>
        ))}
        {getMonthGrid(month).map((date) => {
          const isOutsideMonth = date.getMonth() !== month.getMonth()
          const isPast = date < today
          const isEdge = (start && isSameDay(date, start)) || (end && isSameDay(date, end))
          const isInRange = start && end && date > start && date < end
          return (
            <button
              key={date.toISOString()}
              type="button"
              disabled={isOutsideMonth || isPast}
              onClick={() => onSelectDate(date)}
              className={`mx-auto h-10 w-10 text-14 font-medium transition-colors ${
                isOutsideMonth || isPast ? 'cursor-default text-neutral-250' : 'hover:bg-primary-100'
              } ${isEdge ? 'rounded-full !bg-primary-500 text-gray-100' : isInRange ? 'bg-primary-100' : 'rounded-full'} ${isOutsideMonth ? 'invisible' : ''}`}
            >
              {date.getDate()}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function Calendar(props: CalendarProps) {
  const [firstMonth, setFirstMonth] = useState(() => addMonths(new Date(), 0))
  const arrow = 'absolute top-0 flex h-6 w-6 items-center justify-center rounded-full border border-neutral-200'

  return (
    <div className="relative flex flex-col gap-8 sm:flex-row">
      <button type="button" aria-label="Previous month" onClick={() => setFirstMonth(addMonths(firstMonth, -1))} className={`${arrow} left-0`}>
        <ChevronLeftIcon className="h-4 w-4" />
      </button>
      <button type="button" aria-label="Next month" onClick={() => setFirstMonth(addMonths(firstMonth, 1))} className={`${arrow} right-0`}>
        <ChevronRightIcon className="h-4 w-4" />
      </button>
      <Month month={firstMonth} {...props} />
      <Month month={addMonths(firstMonth, 1)} {...props} />
    </div>
  )
}
