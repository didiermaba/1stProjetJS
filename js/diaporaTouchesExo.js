let buttonNext = document.querySelector(".suivant")
buttonNext.onclick = imageSuivante

/**
 *
 * @param {type} anImages
 * @returns {undefined}
 */
function init(anImages) {
    for (i = 0; i < anImages; i++) {
        tImages[i] = new Image()
        tImages[i].src = "../images/" + i + ".png"
    }
    i = 0
   
} /// init
/**
 *
 * @returns {undefined}
 */
function imageSuivante(){
    i++
    console.log('imageSuivante')
    photo.src = tImages[i].src
    photo.alt = "Image : " + i + ".png"
    
    if (i === tImages.length-1) {
        buttonNext.disabled = true
    } else {
        buttonNext.disabled = false
    }
}
/*
 * MAIN
 */
var i
var tImages = new Array()
var photo = document.getElementById("photo")
window.onload = init(4)//change le nombre d'image que l'on veux traiter