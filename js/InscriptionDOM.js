/*
 * inscriptionFonctionsDOM.js
 */

/**
 *
 * @returns {undefined}
 */
function initInscription() {

    console.log("initInscription")

    // Quand l'utilisateur clique sur le bouton "valider"
    // On sollicite la fonction valider
    document.getElementById("btValider").onclick = valider
    // Création d'un tableau
    let villes = new Array()
    // Remplissage du tableau
    villes[0] = "Paris"
    villes[1] = "Lyon"
    villes[2] = "Marseille"
    villes[2] = "Villeneuve d'Ascq"
    // Remplissage de la liste déroulante
    let listeVilles = document.getElementById("villes")
    //let options = "<option value='0'>Sélectionnez</option>"
    let option = document.createElement("option")
    option.setAttribute("value", 0)
    option.innerHTML = "Sélectionnez"
    listeVilles.appendChild(option)
    for (let i = 0; i < villes.length; i++) {
        //options += '<option value="' + villes[i] + '">' + villes[i] + "</option>"
        let option = document.createElement("option")
        option.setAttribute("value", villes[i])
        option.innerHTML = villes[i]
        listeVilles.appendChild(option)
    }
//    listeVilles.selectedIndex = -1
    //document.getElementById("villes").innerHTML = options

    // jours, mois et années
    let listeJours = document.getElementById("jours")
    option = document.createElement("option")
    option.setAttribute("value", 0)
    option.innerHTML = "Sélectionnez"
    listeJours.appendChild(option)
    for (let i = 1; i <= 31; i++) {
        let option = document.createElement("option")
        option.setAttribute("value", i)
        option.innerHTML = i
        listeJours.appendChild(option)
    }
    //document.getElementById("jours").innerHTML = options

    options = "<option value='0'>Sélectionnez</option>"
    for (let i = 1; i <= 12; i++) {
        options += "<option>" + i + "</option>"
    }
    document.getElementById("mois").innerHTML = options

    let d = new Date()
    let anneeEnCours = d.getFullYear()
    options = "<option value='0'>Sélectionnez</option>"
    for (let i = 1900; i <= anneeEnCours; i++) {
        options += "<option>" + i + "</option>"
    }
    document.getElementById("annees").innerHTML = options

    document.getElementById("checkBoxPasswordVisible").onclick = passwordVisible

//    document.getElementById("btValider").onclick = valider
    document.getElementById("btValider").onclick = function () {
        console.log("onclick 1 sur btValider")
        valider()
        console.log("onclick 2 sur btValider")
    }

    // En periode de test
    enTest()
} /// initInscription

/**
 * 
 * @return {undefined}
 */
function enTest() {
    // En periode de test
    document.getElementById("pseudo").value = "Tintin"
    document.getElementById("mdp").value = "mdp123"
    document.getElementById("email1").value = "tintin@free.fr"
    document.getElementById("email2").value = "tintin@free.fr"
    document.getElementById("villes").value = "Villeneuve d'Ascq"
    document.getElementById("jours").value = "2"
    document.getElementById("mois").value = "10"
    document.getElementById("annees").value = "2021"
} /// enTest


/**
 * 
 * @returns {undefined}
 */
function passwordVisible() {
    if (document.getElementById("checkBoxPasswordVisible").checked) {
        document.getElementById("mdp").type = "text"
        document.getElementById("lblAfficherLeMotDePasse").innerHTML = "Masquer le mot de passe"
    } else {
        document.getElementById("mdp").type = "password"
        document.getElementById("lblAfficherLeMotDePasse").innerHTML = "Afficher le mot de passe"
    }
} /// passwordVisible


/**
 * 
 */
function valider() {
    console.log("VALIDER")
    let OK = true
    let message = "";

    let pseudo = document.getElementById("pseudo").value
    let mdp = document.getElementById("mdp").value
    let email1 = document.getElementById("email1").value
    let email2 = document.getElementById("email2").value
    let ville = document.getElementById("villes").value
    let jour = document.getElementById("jours").value
    let mois = document.getElementById("mois").value
    let annee = document.getElementById("annees").value

    if (pseudo.trim() === "") {
        OK = false
        message += "Pseudo manquant<br />"
    }
    if (mdp.trim().length < 6 || mdp.trim().length > 12) {
        OK = false
        message += "Mot de passe incorrect<br />"
    }

    if (email1 !== email2) {
        OK = false
        message += "Emails incorrects<br />"
    }

//    if (ville === "0") {
//        OK = false
//        message += "Ville incorrecte<br />"
//    }
//
//    if (jour === "0") {
//        OK = false
//        message += "Jour incorrect<br />"
//    }
//
//    if (mois === "0") {
//        OK = false
//        message += "Mois incorrect<br />"
//    }
//
//    if (annee === "0") {
//        OK = false
//        message += "Année incorrecte<br />"
//    }

    let listes = document.getElementsByTagName("select");
    for (let i = 0; i < listes.length; i++) {
        console.log(listes[i].value)
        if (listes[i].value === "0") {
            OK = false
            message += "Un problème dans " + listes[i].title + " !!!<br />"
        }
    }

// FIN
    if (OK) {
        message = "Jusque là tout va bien !"
    }

    // Affichage
    document.getElementById("lblMessage").innerHTML = message
} /// valider


/*
 * MAIN
 */
window.onload = initInscription
