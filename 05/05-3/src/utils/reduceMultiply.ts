import { range } from "../../../05-1/src/utils/range";

export let reduceMultiply: number = range(1, 10 + 1)
    .reduce((result: number, value: number) => result * value, 1)
