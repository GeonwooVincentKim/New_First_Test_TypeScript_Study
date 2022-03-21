import { original, copied } from "./utils/deepCopy";
import { originalArray, shallowCopiedArray } from "./utils/shallow-copy";

console.log("\n------------------------");
console.log("Deep Copy -> ", original, copied);

console.log("------------------------");
console.log("Shallow Copy -> ", originalArray, shallowCopiedArray);

console.log("------------------------\n");
