import { range } from "../../../05-1/src/utils/range";

const array: number[] = range(1, 10 + 1)
const getValue = array[7]

export let belowValue: number[] = array.filter((v, index) => index < getValue)
export let overValue: number[] = array.filter((v, index) => index >= getValue)
