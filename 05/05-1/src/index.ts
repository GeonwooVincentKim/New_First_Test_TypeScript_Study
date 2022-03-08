import { numbers, strings } from "./utils/array";
import { IPerson, numArray, personArray, strArray } from "./utils/array-type";
import { a, o } from "./utils/isArray";
import { split } from "./utils/split";

console.log("\nNumbers & Strings -> ", numbers, strings);
console.log("Check is Array -> ", Array.isArray(a), Array.isArray(o))
console.log("------------------------------------");

console.log("Number Array -> ", numArray);
console.log("String Array -> ", strArray);
console.log("IPerson Array -> ", personArray);
console.log("------------------------------------");

console.log("Split -> ", split('Hello'), split('H_e_l_l_o', '_'))
console.log("------------------------------------");

