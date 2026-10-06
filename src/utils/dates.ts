const MS_PER_DAY = 24 * 60 * 60 * 1000

export function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

export function isSameDay(a: Date, b: Date) {
  return a.getTime() === b.getTime()
}

export function addMonths(date: Date, months: number) {
  return new Date(date.getFullYear(), date.getMonth() + months, 1)
}

export function daysBetween(from: Date, to: Date) {
  return Math.round((to.getTime() - from.getTime()) / MS_PER_DAY)
}

export function formatShortDate(date: Date) {
  return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })
}

export function formatMonthTitle(date: Date) {
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

export function getMonthGrid(month: Date) {
  const firstDay = new Date(month.getFullYear(), month.getMonth(), 1)
  const gridStart = new Date(firstDay.getFullYear(), firstDay.getMonth(), 1 - firstDay.getDay())
  return Array.from({ length: 42 }, (_, index) => new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + index))
}
