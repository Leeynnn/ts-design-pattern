export function isFunction(val: any): boolean {
  return toString.call(val) === '[object Function]'
}
