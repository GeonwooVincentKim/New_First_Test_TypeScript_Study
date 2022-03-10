let getName = ['Jack', 'Jane', 'Steve']

console.log("\n<Inner Name>")
for(let innerName in getName){
    // const constName = getName[innerName];
    console.log(`${innerName}: ${getName[innerName]}`);
}

console.log("------------------------------\n<Outer Name>");
for(let outerName of getName){
    console.log(outerName);
}

console.log("");
