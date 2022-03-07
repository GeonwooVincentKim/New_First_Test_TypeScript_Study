import { NumberToNumberFunc, add } from "../utils/add";

export let fn: NumberToNumberFunc = add(1)
export let closureResult = fn(2)

console.log("Add (Closure) Result -> ", closureResult)
console.log("Add (Closure) Add Function Parameter -> ", add(1)(2))
