export function hasIntersection<T = string | number>(arr1: T[], arr2: T[]): boolean {
  for (const o of arr1) {
    if (arr2.includes(o)) {
      return true
    }
  }

  return false
}

export function isWin() {
  return !/Mac OS/i.test(navigator.userAgent)
}
