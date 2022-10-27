// Cours sur les conditions.
console.log("Fichier sur les conditionnelles en JS");

/*if (ma_condition) {

} else if (ma_nouvelle_condition){

} else {

}*/

const NomUtilisateur = "Albert"

if (NomUtilisateur) {
    console.log("Je suis un utilisateur loggué.")
} else {
    console.log("Je suis un utilisateur pas loggué")
}

const prenom = "Sophie"

switch(prenom) {
    case "Daniel":
    console.log("Ton prénom est Daniel")
    break

    case "Sophie":
    console.log("Ton prénom est Sophie")
    break

    default:
    console.log("Je ne connais pas ton prénom.")
}


//TERNAIRES
prenom === "Didier" ? console.log("Cas si vrai") :
console.log('Cas si faux')

isLogged = true
isLogged ? console.log("Logged") : console.log("Not Logged")