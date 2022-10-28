function isAnagram (str1, str2) {
    //Vérifier si les deux chaînes ont des longueurs différentes
    if (str1.length !== str2.length) {
        alert("Les mots " + mot1 + " et " + mot2 + " ne sont pas des anagrammes.")
        return false;
    }
    
    //Triez les deux chaînes.
    var s1 = str1.split("").sort().join();
    var s2 = str2.split("").sort().join();
    //Comparez les deux chaînes triées.
    if (s1 === s2) {
        alert("Les mots " + mot1 + " et " + mot2 + " sont des anagrammes.")
    } else {
        alert("Les mots " + mot1 + " et " + mot2 + " ne sont pas des anagrammes.")
    }
    return
}
mot1 = prompt("Premier mot : ")
mot2 = prompt("Second mot : ")
isAnagram(mot1, mot2)
