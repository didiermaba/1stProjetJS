/*
 inscription.js
 */
function initInscription() {
    document.getElementById("pseudo").value = ""
    document.getElementById("password").value = ""
    document.getElementById("email").value = ""
    document.getElementById("emailBis").value = ""

    // Quand l'utilisateur clique sur le bouton "valider"
    // On sollicite la fonction valider
    document.getElementById("valider").onclick = valider
    // Création d'un tableau
    let villes = new Array()
    // Remplissage du tableau
    villes[0] = "Paris"
    villes[1] = "Lyon"
    villes[2] = "Marseille"
    // Remplissage de la liste déroulante
    let options = "<option value='0'>Sélectionnez</option>"
    for (let i = 0; i < villes.length; i++) {
        options += "<option value='" + villes[i] + "'>" + villes[i] + "</option>"
    }
    document.getElementById("villes").innerHTML = options

    // jours, mois et années
    options = "<option value='0'>Sélectionnez</option>"
    for (let i = 1; i <= 31; i++) {
        options += "<option>" + i + "</option>"
    }
    document.getElementById("jours").innerHTML = options

    options = "<option value='0'>Sélectionnez</option>"
    let mois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
    for (let i = 0; i < mois.length; i++) {
        options += "<option value ='" + (i + 1) + "'>" + mois[i] + "</option>"
    }
    document.getElementById("mois").innerHTML = options

    options = "<option value='0'>Sélectionnez</option>"
    for (let i = 1920; i <= 2023; i++) {
        options += "<option>" + i + "</option>"
    }
    document.getElementById("annees").innerHTML = options

    // Complétez

} /// initInscription



/** • le pseudo avec au minimum 5 caractères,
    • le mot de passe avec au minimum 6 caractères et au maximum 12 caractères (on verra plus tard la contrainte de « qualité » (une majuscule, une minuscule, ….),
    • les e-mails doivent être identiques,
    • pour les listes déroulantes il faut qu’un item autre que « Sélectionnez » ait été sélectionné.
 *
 * @returns {undefined}
 */

function valider() {
    console.clear()
    let message = ""
    // Le pseudo ne doit contenir que des lettres non accentuées et des chiffres

    //récupération de l'élement HTML (pseudo) dans un objet
    let objetPseudo = document.getElementById("pseudo")
    //récupération de la valeur de la variable pseudo
    let pseudoValue = objetPseudo.value
    //test du nombre de caractères de la valeur récupérer ligne précédente
    if (pseudoValue.length < 5) {
        message += "Le pseudo doit être d'un minimun de 5 caractères <br>"
    }
    else {
        const er = new RegExp("^[0-9a-zA-Z]{1,}$") // 
        let resultat = er.test(pseudoValue)
        if (resultat == false) {
            message += "Le pseudo doit avoir que des chiffres et des lettres non accentuées<br>"
        }
    }
    //récupération de lélement HTML (password)dans un objet
    let password = document.getElementById("password").value

    if (password.length < 6 || password.length > 12) {
        message += "Le mot de passe doit être compris entre 6 et 12 caractères <br>"
    }
    else{
        const erro = new RegExp("^(?=.*?\\w)(?=.*?[#?!@$%^&*-+]).{6,12}$")
        let resultat = erro.test(password)
        if(!resultat){
            message +="le mot de passe doit contenir 6 à 12 caractères et au moins 1 chiffre, 1 minuscule, 1 majuscule et une caractère speécial parmi: #?!@$%^&*-+<br>"
        }
    }
    // Traitement des Email
    if (document.getElementById("email").value != document.getElementById("emailBis").value) {
        message += "Les Emails ne sont pas identiques <br>"
    }
    // traitement des listes déroulantes
    if (document.getElementById("villes").value == 0) {
        message += "Vous devez sélectionner une ville <br>"
    }

    if (document.getElementById("jours").value == 0) {
        message += "Vous devez sélectionner un jour de naissance <br>"
    }

    if (document.getElementById("mois").value == 0) {
        message += "Vous devez sélectionner un mois de naissance <br>"
    }

    if (document.getElementById("annees").value == 0) {
        message += "Vous devez sélectionner une année de naissance <br>"
    }
    console.log(message)
    document.getElementById("message").innerHTML = message
} /// valider

/*
 * MAIN : Au démarrage on sollicite la fonction initInscription
 */
window.onload = initInscription