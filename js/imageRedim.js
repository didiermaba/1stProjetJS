/*
imageRedim.js
*/
/**
*
* @returns {undefined}
*/
function initImageRedim() {
    document.getElementById("agrandir").addEventListener("click", agrandir)
    document.getElementById("reduir").addEventListener("click", reduir)
    } /// initImageRedim
    /**
    *
    * @returns {undefined}
    */
    function agrandir() {
    document.getElementById("photo").setAttribute("width", "300")
    // document.getElementById("photo").width = "300"
    } /// agrandir
    function reduir() {
        document.getElementById("photo").setAttribute("width", "60")
    }
    /*
    * MAIN
    */
    window.onload = initImageRedim