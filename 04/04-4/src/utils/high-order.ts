const add = (a: number): (number) => number => (b: number): number => a + b
export const result = add(1)(2)
