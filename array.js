const passengers = ["Didier", "François", "Raptor"];

//Boucler sur le tableau pour récuperer ses valeurs.
for (let passenger of passengers) {
    console.log("le passager est: " + passenger)
}

console.log("-------------------")

for (let i in passengers) {
    console.log("le passager est: " + passengers[i])
}


//boucle classique avec length
for (let i = 0; i < passengers.length; i++)
    console.log("le passager est: " + passengers[i])

const passengersTransformed = passengers.map(passenger => "le passager est : " + passenger)
console.log(passengersTransformed)

passengers.forEach(passenger => console.log("le passager est : " + passenger))

const passengersTransformed2 = []
passengers.forEach(passenger => passengersTransformed2.push("le passager est: " + passenger))
console.log(passengersTransformed2)