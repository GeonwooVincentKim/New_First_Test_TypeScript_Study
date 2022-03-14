import { range } from "../../../05-1/src/utils/range";
import { fold } from "./fold";
import { map } from "./map";

let numbers: number[] = range(1, 100 + 1)

export let squareResult = fold(
    map(numbers, value => value * value),
    (squareResult, value) => squareResult + value, 0
)

