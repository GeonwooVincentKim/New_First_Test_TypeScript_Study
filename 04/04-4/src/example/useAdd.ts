import { NumberToNumberFunc, add } from "../utils/add";

export let fn: NumberToNumberFunc = add(1)
export let closureResult = fn(2)

