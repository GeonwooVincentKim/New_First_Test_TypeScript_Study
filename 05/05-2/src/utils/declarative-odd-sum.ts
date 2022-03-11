import { range } from "../../../05-1/src/utils/range";
import { fold } from "./fold";
import { filter } from "./filter";

let numbers: number[] = range(1, 100 + 1);
const isOdd = (n: number): boolean => n % 2 != 0

export let oddResult = fold(
    filter(numbers, isOdd),
    (oddResult, value) => oddResult + value, 0
)
