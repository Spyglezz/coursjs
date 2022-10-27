const reponse = prompt("Où avez-vous mal?")
const reponseLower = reponse.toLowerCase()
let douleur
let answer

if (reponseLower === "abdomen") {
    douleur = "abdomen"
} else if (reponseLower === "gorge") {
    douleur = "gorge"
} else {
 douleur = "aucune"
}

if (douleur === "abdomen") {
    console.log("Appendicite")
} else if (douleur === "gorge") {
    answer = prompt("Avez-vous de la fièvre?")
        const answerLower = answer.toLowerCase()
        answerLower === "oui" ? console.log("Rhume") : console.log('Mal de gorge')
} else {
    answer = prompt("Avez-vous de la toux?")
    const answerLower = answer.toLowerCase()
    if (answerLower === "oui") {
        const answerTwo = prompt("Avez-vous de la fièvre?")
        answerTwo === "oui" ? console.log("Rhume") : console.log('Refroidissement')
    } else {
        console.log("Rien")
    }
}


/*
const answer = prompt("Avez vous une douleur ?");

const answerLower = answer.toLowerCase();



switch(answerLower) {

    case "abdomen":

        alert('Vous avez une Appendicite')

        break

    case "gorge":

        const fievre = prompt("Avez-vous de la Fievre")

        const fievreLower = fievre.toLowerCase();

       

        if (fievreLower === "oui") {

            alert('Vous avez un Rhume')

        } else {

            alert('Vous avez un Mal de gorge')

        }

        break



        case "aucune":

            const toux = prompt("Avez-vous de la Toux")

            const touxLower = toux.toLowerCase()



            if (touxLower === "oui") {



                const fievreux = prompt("Avez-vous de la Fievre")

                const fievreuxLower = fievreux.toLowerCase();



                if(fievreuxLower === "oui") {

                    alert('Vous avez un Rhume')

                } else {

                    alert("Vous avez un Refroidissement")

                }

               

            } else {

                alert('Vous avez Rien')

            }

            break



    default:

        alert("Vous etes surement malade")

}
*/