import { range } from "../../../05-1/src/utils/range";

export let reduceSum: number = range(1, 100 + 1)
    .reduce((result: number, value: number) => result + value, 0)

