export function isFn(v: unknown): v is CallableFunction {
  return typeof v === 'function'
}

export function clamp(min: number, val: number, max: number) {
  return Math.max(min, Math.min(val, max))
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
export function monthToValue(month: string) {
  return months.indexOf(month)
}

export function valueToMonth(val: number) {
  return months[val]
}

export function maskCardNumber(number: string) {
  return number.replace(/(?<=\d{4}\s)(?:\d{4}\s?){2}(?=\s\d{4})/, '**** ****')
}

export function initials(name: string): [string, string]
export function initials(firstName: string, lastName: string): [string, string]
export function initials(name: string, lastName?: string) {
  if (lastName === undefined) {
    return name.split(/\s+/, 2).map((n) => n[0].toUpperCase())
  }
  return [name[0].toUpperCase(), lastName[0].toUpperCase()]
}
