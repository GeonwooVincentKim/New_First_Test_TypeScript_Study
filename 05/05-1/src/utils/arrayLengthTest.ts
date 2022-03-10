import { arrayLength, isEmpty } from "./arrayLength";

export let numberArray: number[] = [1, 2, 3]
export let stringArray: string[] = ['Hello', 'World']

export type IPerson = {name: string, age?: number}
export let personArray: IPerson[] = [{name: 'Jack'}, {name: 'Jane', age: 32}]
