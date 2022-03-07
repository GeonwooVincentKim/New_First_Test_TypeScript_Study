export class B {
    constructor (public value: number = 1) {}
    method(): void {
        console.log(`Value: ${this.value}`)
    }
}
