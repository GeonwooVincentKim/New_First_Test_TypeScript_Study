import { range } from "../../../05-1/src/utils/range";

const array: number[] = range(1, 10 + 1)
const half = array.length / 2

export let belowHalf: number[] = array.filter((v, index) => index < half)
export let overHalf: number[] = array.filter((v, index) => index >= half)
