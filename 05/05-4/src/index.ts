import { original, copied } from "./utils/deepCopy";
import { deepCopiedArray, oArray } from "./utils/DeepCopyBySpreadOperator";
import { originalArray, shallowCopiedArray } from "./utils/shallow-copy";

console.log("\n------------------------");
console.log("Deep Copy -> ", original, copied);

console.log("------------------------");
console.log("Shallow Copy -> ", originalArray, shallowCopiedArray);

console.log("------------------------");
console.log("Deep Copy by Spread Operator -> ", oArray, deepCopiedArray);

console.log("------------------------\n");
