export function isFn(v: unknown): v is CallableFunction {
  return typeof v === 'function'
}

export function clamp(min: number, val: number, max: number) {
  return Math.max(min, Math.min(val, max))
}

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]
export function monthToValue(month: string) {
  return months.indexOf(month)
}

export function valueToMonth(val: number) {
  return months[val]
}