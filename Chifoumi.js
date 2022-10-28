//DEFINIR LE SIGNE USER
const signe = prompt("Quel signe?").toLowerCase();
let signeIA;

//GENERER NOMBRE ALEATOIRE POUR SIGNE IA
function getRandomInt(max) {

    return Math.floor(Math.random() * max);

}



let random = getRandomInt(3)
//CHOIX SIGNE IA
switch (random) {
    case 0 :
        signeIA = "pierre"
        break

    case 1 : 
        signeIA = "feuille"
        break

    case 2 :
        signeIA = "ciseaux"
        break

    default: signeIA="Raptor"
}

//TEST RECOVERY DES SIGNES
console.log("User:" + signe)
console.log("IA:" + signeIA)

//COMPARAISON CHOIX
switch(signeIA) {

    case "feuille":

        if(signe === "pierre") {

            alert("L'ordinateur gagne")

        } else if(signe === "ciseaux") {

            alert("L'utilisateur gagne")

        } else {

            alert("Egalité")

        }

    case "ciseaux":

        if(signe === "pierre") {

            alert("L'utilisateur gagne")

        } else if(signe === "ciseaux") {

            alert("Egalité")

        } else {

            alert("L'ordinateur gagne")

        }

    case "pierre":

        if(signe === "pierre") {

            alert("Egalité")

        } else if(signe === "ciseaux") {

            alert("L'ordinateur gagne")

        } else {

            alert("L'utilisateur gagne")

        }

}