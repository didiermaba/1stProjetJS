/*
authentification.js
*/
function initAuthentification() {
    // Quand l'utilisateur clique sur le bouton "valider"
    // On sollicite la fonction valider
    document.getElementById("btValider").onclick = valider // onclick en minuscule
    console.log("initAuthentification")
    pseudo.setAttribute("value", "pseudo");
    mdp.setAttribute("value", "MDP123");
    // Qd l'user clique sur la case à cocher
    document.getElementById("chkMDPvisible").onclick = displayHidePassword // onclick en minuscule
} /// init
 
/**
* 
* @returns {undefined}
*/
function valider() {
    console.log("valider")
    // Déclaration d'une variable et affectation d'une valeur
    let message = "0K"
    // Récupération d'une saisie de l'utilisateur
    let pseudo = document.getElementById("pseudo").value
    let mdp = document.getElementById("mdp").value
    // Test des valeurs saisies
    // trim() enlève les espaces avant et après
    // Si le pseudo est vide ou si le mdp est vide alors
    if (pseudo.trim() === "" || mdp.trim() === "") {
        // Affectation de "Il faut tout saisir" à la variable message
        message = "Il faut tout saisir"
    }
    // Affichage d'une valeur (0K ou Il faut tout saisir) dans le <label>
    document.getElementById("lblMessage").innerHTML = message
    alert("Fin de valider")
    console.log("Après")
    alert("Fin 2 de valider")
} /// initAuthentification

function displayHidePassword(){
    console.log("MDPvisible")
    // Declaration d'une variable et affectation d'une valeur
    let chkMDPvisible = document.getElementById("chkMDPvisible").Checked
    console.log(chkMDPvisible)
    //test des valeurs saisies
    if(chkMDPvisible === true){
        // MPD visible
        let mdp= document.getElementById("mdp")
        mdp.setAttribute("type","text")

   
    }
}
 
// Au chargement de la page et de la lecture du fichier js on sollicite la fonction init
window.onload = initAuthentification