export type Person = {name: string, age: number};

export const makePerson = (name: string, age: number = 10): Person => {
    const person = {name: name, age: age}
    return person
}

