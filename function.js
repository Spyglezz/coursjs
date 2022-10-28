//Functions

function afficherDeuxValeurs(param1, param2 = "raptor") {
    if(param1) {
        return param1 + param2
    }
return "Il y a un problème de paramètres reçus."
}

const reponseFonction = afficherDeuxValeurs("Véloci")
console.log(reponseFonction)

//Functions

console.log("Version fonction fléchée")
const afficherDeuxValeursF = (param1, param2 = "raptor") => {
    if(param1) {
        return param1 + param2
    }
return "Il y a un problème de paramètres reçus."
}

const reponseFonctionF = afficherDeuxValeurs("Utah")
console.log(reponseFonctionF)

function sum(a,b,c) {
    return a + b + c
}

const sumResult = sum(1,2,3);
console.log(sumResult)