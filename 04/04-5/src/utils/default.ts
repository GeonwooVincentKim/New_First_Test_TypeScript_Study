export type Person = {name: string, age: number};

export const makePerson = (name: string, age: number = 10): Person => {
    const person = {name: name, age: age}
    return person
}
export const makePerson2 = (name: string, age: number = 10): Person => ({name, age})

export const printPerson = ({name, age}: Person): void =>
    console.log(`\nPrint Person -> Name: ${name}, age: ${age}`);

printPerson({name: 'Jack', age: 10});

export const makeObject = (key, value) => ({[key]: value})
