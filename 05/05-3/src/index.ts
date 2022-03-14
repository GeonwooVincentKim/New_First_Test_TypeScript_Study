import { chainResult } from "./utils/arrayMethodChain";
import { belowValue, overValue } from "./utils/filterFindIndex";
import { belowHalf, overHalf } from "./utils/filterIndex";
import { evens, odds } from "./utils/filterOddEven";
import { squareNames } from "./utils/mapNumberToString";
import { mapSquares } from "./utils/mapSquare";

console.log("\n------------------------------");
console.log("Chain Result -> ", chainResult);

console.log("------------------------------");
console.log("Odds and Evens -> ", odds, evens);

console.log("------------------------------");
console.log("BelowHalf and OverHalf -> ", belowHalf, overHalf);

console.log("------------------------------");
console.log("Below Value and Over Value -> ", belowValue, overValue);

console.log("------------------------------");
console.log("Map Squares -> ", mapSquares);

console.log("------------------------------");
console.log("Square Names (Map Names) -> ", squareNames);

console.log("------------------------------\n");
