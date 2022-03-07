import * as callback from "./utils/callback";
import { calc } from "./utils/nested";

console.log("\nCall Back Result -> ", callback);
console.log("\n-----------------------\n");

calc(30, (result: number) => console.log(`Calc Result is --> ${result}`)); 
