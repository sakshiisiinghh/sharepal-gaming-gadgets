import { useState } from 'react'
import { daysBetween, formatShortDate } from '../../utils/dates'
import { CalendarIcon, CalendarPeriodIcon, InfoIcon, TagIcon } from '../icons'
import Calendar from './Calendar'
import { CloseButton, Modal } from './Modal'

export interface DateRange {
  delivery: Date
  pickup: Date
}

interface DateRangeModalProps {
  initialRange: DateRange | null
  onConfirm: (range: DateRange) => void
  onClose: () => void
}

function DateField({ label, date, placeholder }: { label: string; date: Date | null; placeholder: string }) {
  return (
    <div className="space-y-2">
      <label className="text-14 font-medium">
        {label} <span className="text-red-500">*</span>
      </label>
      <div className="relative flex h-11 items-center rounded-2xl border-2 border-neutral-200 bg-gray-100 pl-8 text-14">
        <CalendarIcon className="absolute left-2 h-4 w-4 text-neutral-700" />
        <span className={date ? 'font-medium text-neutral-900' : 'text-neutral-300'}>{date ? formatShortDate(date) : placeholder}</span>
      </div>
    </div>
  )
}

export default function DateRangeModal({ initialRange, onConfirm, onClose }: DateRangeModalProps) {
  const [delivery, setDelivery] = useState<Date | null>(initialRange?.delivery ?? null)
  const [pickup, setPickup] = useState<Date | null>(initialRange?.pickup ?? null)

  const selectDate = (date: Date) => {
    if (!delivery || pickup || date <= delivery) {
      setDelivery(date)
      setPickup(null)
    } else {
      setPickup(date)
    }
  }

  const rentalDays = delivery && pickup ? daysBetween(delivery, pickup) - 1 : 0

  return (
    <Modal title="Select your Dates" onClose={onClose}>
      <div className="flex items-center justify-between p-6 pb-0">
        <h2 className="text-24 font-semibold tracking-tight">Select your Dates</h2>
        <CloseButton onClose={onClose} />
      </div>
      <div className="flex flex-col gap-6 p-6 pt-4 lg:flex-row">
        <div className="flex-1 space-y-5">
          <div className="grid gap-3 md:grid-cols-2">
            <DateField label="Delivery Date" date={delivery} placeholder="Select delivery date" />
            <DateField label="Pickup Date" date={pickup} placeholder="Select pickup date" />
          </div>
          <div className="flex items-start gap-2 rounded-xl bg-primary-100 px-3 py-2 md:rounded-2xl">
            <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
            <p className="text-12 text-primary-700">
              <b>Same-day delivery</b> between <b>5PM and 11PM</b> For future dates, you can select a specific time slot available at
              checkout. We pickup between <b>9AM to 1PM</b>.
            </p>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-14 font-medium">Your Rental Period:</span>
            <div className="flex items-end gap-3 rounded-2xl border-2 border-neutral-200 bg-gray-100 px-3 py-2.5">
              <div className="flex items-end gap-1">
                <span className="text-40 font-bold text-neutral-800">{String(rentalDays).padStart(2, '0')}</span>
                <span className="pb-0.5 text-14 font-medium text-neutral-500">Day</span>
              </div>
              <span className="h-full w-[2px] shrink-0 self-stretch rounded-full bg-neutral-200" />
              <div className="flex flex-1 flex-col gap-1">
                <span className="text-12 font-medium text-neutral-900">Chargeable Period:</span>
                <span className="flex items-center gap-2 text-14 font-medium text-neutral-300">
                  <CalendarPeriodIcon className="h-4 w-4" />
                  {delivery && pickup ? `${formatShortDate(delivery)} - ${formatShortDate(pickup)}` : '--'}
                </span>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl bg-primary-900 pb-5 text-white">
            <div className="mb-4 flex items-center gap-3">
              <TagIcon className="h-10 w-10 text-secondary-500" />
              <span className="text-16 font-bold italic text-secondary-400 md:text-24">Save more with us!</span>
            </div>
            <p className="px-5 text-12 font-semibold">
              Longer rental periods mean bigger savings—enjoy discounts of up to 12%. We don’t charge you for deliver and pickup days!
            </p>
          </div>
          <button
            type="button"
            disabled={!delivery || !pickup}
            onClick={() => delivery && pickup && onConfirm({ delivery, pickup })}
            className="h-14 w-full rounded-4xl bg-primary-500 px-6 text-18 font-medium text-gray-100 hover:bg-primary-400 disabled:cursor-default disabled:bg-neutral-200 disabled:text-neutral-500"
          >
            Continue
          </button>
        </div>
        <div className="h-max flex-[1.5] rounded-3xl bg-gray-100 p-6">
          <Calendar start={delivery} end={pickup} onSelectDate={selectDate} />
        </div>
      </div>
    </Modal>
  )
}
