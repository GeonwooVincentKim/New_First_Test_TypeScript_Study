import { oddResult } from "./utils/declarative-odd-sum";
import { numbers, result } from "./utils/declarative-sum";
import { sum } from "./utils/imperative-sum";

console.log("\n-----------------------");
console.log("Imperative Sum -> ", sum);

console.log("-----------------------");
console.log("Declarative Sum -> ", numbers);

console.log("-----------------------");
console.log("Fold Function Sum -> ", result);

console.log("-----------------------");
console.log("ODD Result -> ", oddResult);
console.log("-----------------------\n");
