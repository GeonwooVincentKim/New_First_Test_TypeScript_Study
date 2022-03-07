import * as callback from "./utils/callback";
import { calc } from "./utils/nested";
import { result } from "./utils/high-order";

console.log("\nCall Back Result -> ", callback);
console.log("\n-----------------------\n");

calc(30, (result: number) => console.log(`Calc Result is --> ${result}`)); 
console.log("\n-----------------------\n");

console.log("Result -> ", result);
