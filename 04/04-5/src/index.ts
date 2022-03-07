import { C, D } from "./utils/C";
import { makePerson, makePerson2, printPerson } from "./utils/default";
import { makeObject } from "./utils/Indexable-Key";
import { a } from "./utils/testA";
import { b } from "./utils/testB";
import { chainResult } from "./utils/TestMethodChain";

console.log("Make Person (Name) -> ", makePerson('Jack'));
console.log("Make Person (Name)(Age) -> ", makePerson('Jane', 33));
console.log("(Arrow Function - Return Value)Make Person 2 (Name)(Age) -> ", makePerson2('Jane', 33));

console.log("Print Person -> ", printPerson({name: 'Jack', age: 10}));
console.log("\nMake Object -> ", makeObject('name', 'Jack'))
console.log("Make Object -> ", makeObject('firstName', 'Jane'))

console.log("\n---------------------------------------------------\n");
console.log("A value -> ", a);
console.log("B value -> ", b);

console.log("\nWho are you? (C) -> ", C.whoAreYou());
console.log("Who are you? (D) => ", D.whoAreYou());

console.log("Method Chain -> ", chainResult);
