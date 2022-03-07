import * as callback from "./utils/callback";
import { calc } from "./utils/nested";
import { result } from "./utils/high-order";
import { add } from "./utils/add";

import { closureResult, fn } from "./example/useAdd";

console.log("\nCall Back Result -> ", callback);
console.log("\n-----------------------\n");

calc(30, (result: number) => console.log(`Calc Result is --> ${result}`)); 
console.log("\n-----------------------\n");

console.log("Result -> ", result);
console.log("\n-----------------------\n");

console.log("Add -> ", add(1));
console.log("\n-----------------------\n");

console.log("Add (Closure) Result -> ", closureResult)
console.log("Add (Closure) Add Function Parameter -> ", add(1)(2))

console.log("\nClosure fn ->", fn);
console.log("Closure Result -> ", closureResult);
