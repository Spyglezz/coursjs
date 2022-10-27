/*for(let i = 1; i<200 ; i++) {
    if(i % 3 ===0 && i % 5 ===0){
        console.log("Coucou Hello")
    } else if(i % 3 ===0) {
        console.log("Coucou")
    } else if(i % 5 ===0) {
        console.log("Hello")
    } else {
        console.log(i)
    }
}
*/
/*
let i = 1
while (i <= 199) {
    if(i % 3 ===0 && i % 5 ===0){
        console.log("Coucou Hello")
    } else if(i % 3 ===0) {
        console.log("Coucou")
    } else if(i % 5 ===0) {
        console.log("Hello")
    } else {
        console.log(i)
    }
    i++
}
*/
let i = 1
while (i <= 199) {
    switch(true) {
        case (i % 3 === 0 && i % 5 === 0): 
        console.log("Coucou Hello")
        break

        case (i % 3 === 0): 
        console.log("Hello")
        break

        case (i % 5 === 0): 
        console.log("Coucou")
        break

        default:
        console.log(i)
    }
    i++
 }
