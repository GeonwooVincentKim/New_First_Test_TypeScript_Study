import { range } from "../../../05-1/src/utils/range";

const array: number[] = range(1, 10 + 1)

export let odds: number[] = array.filter((value) => value % 2 != 0)
export let evens: number[] = array.filter((value) => value % 2 == 0)
