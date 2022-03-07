import { Calculator } from "./MethodChain";

export let calc = new Calculator
export let chainResult = calc.add(1).add(2).multiply(3).multiply(4).value
