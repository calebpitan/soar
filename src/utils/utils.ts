export function isFn(v: unknown): v is CallableFunction {
  return typeof v === 'function'
}

export function clamp(min: number, val: number, max: number) {
  return Math.max(min, Math.min(val, max))
}
