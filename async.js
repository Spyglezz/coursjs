(async() => {
	const contenu = await fetch("https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_parkings-publics-nantes-disponibilites&q=&facet=grp_nom&facet=grp_statut");
	const contenuJson = await contenu.json()


// console.log(contenuJson.records[0].fields.grp_nom)

for (let i in contenuJson.records) {
    console.log("Nom du groupe: " + contenuJson.records[i].fields.grp_nom)
}

contenuJson.records.forEach(record => console.log(record.fields.grp_nom))

})()

