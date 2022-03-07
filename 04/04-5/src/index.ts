import { makePerson, makePerson2, printPerson } from "./utils/default";
import { makeObject } from "./utils/Indexable-Key";

console.log("Make Person (Name) -> ", makePerson('Jack'));
console.log("Make Person (Name)(Age) -> ", makePerson('Jane', 33));
console.log("(Arrow Function - Return Value)Make Person 2 (Name)(Age) -> ", makePerson2('Jane', 33));

console.log("Print Person -> ", printPerson({name: 'Jack', age: 10}));
console.log("\nMake Object -> ", makeObject('name', 'Jack'))
console.log("Make Object -> ", makeObject('firstName', 'Jane'))
