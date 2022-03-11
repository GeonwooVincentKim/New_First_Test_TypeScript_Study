import { range } from "../../../05-1/src/utils/range";
import { fold } from "./fold";

export let numbers: number[] = range(1, 100 + 1)
export let result = fold(numbers, (result, value) => result + value, 0)
