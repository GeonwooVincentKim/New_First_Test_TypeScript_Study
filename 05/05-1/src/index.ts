import { numbers, strings } from "./utils/array";
import { IPerson, numArray, personArray, strArray } from "./utils/array-type";
import { arrayLength, isEmpty } from "./utils/arrayLength";
import { identify } from "./utils/generic-type-interface";
import { a, o } from "./utils/isArray";
import { join } from "./utils/join";
import { split } from "./utils/split";
import { mergedArray } from "./utils/spread-operator";

console.log("\n------------------------------------");
console.log("Numbers & Strings -> ", numbers, strings);
console.log("Check is Array -> ", Array.isArray(a), Array.isArray(o))
console.log("------------------------------------");

console.log("Number Array -> ", numArray);
console.log("String Array -> ", strArray);
console.log("IPerson Array -> ", personArray);
console.log("------------------------------------");

console.log("Split -> ", split('Hello'), split('H_e_l_l_o', '_'))
console.log("------------------------------------");

console.log("Join -> ", join(['h', 'e', 'l', 'l', 'o']), join(['h', 'e', 'l', 'l', 'o'], '_'))
console.log("------------------------------------\n");

console.log("Array Index Operator -> ", numbers);
console.log("------------------------------------");

console.log(
    "Array Length Test -> ",
    arrayLength(numArray),
    arrayLength(strArray),
    arrayLength(personArray),
    isEmpty([]),
    isEmpty([1]),
    "\n------------------------------------"
);

console.log("Identify Generic Type -> ", identify<boolean>(true), identify(true));
console.log("------------------------------------");

console.log("Merged Array -> ", mergedArray);
console.log("------------------------------------");

console.log("Range -> ", numbers)
console.log("------------------------------------\n");
