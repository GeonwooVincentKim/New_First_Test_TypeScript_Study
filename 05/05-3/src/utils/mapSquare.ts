import { range } from "../../../05-1/src/utils/range";

export let squareNames: string[] = range(1, 5 + 1)
    .map((val, index) => `[${index}]: ${val}`)
