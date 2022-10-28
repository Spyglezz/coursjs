console.log("T-REX")

let maVariable = null;
let maVariableNull = null;
let maVariableUndefined

console.log(typeof maVariableNull) // bug JS
if (maVariableNull === null) {
    console.log("Je suis Null")
}

console.log(typeof maVariableUndefined)
if (maVariableUndefined === undefined) {
    console.log("Je suis undefined")
}

if(maVariable || maVariable === 0 ) {
    console.log("Je rentre dans la condition")
}