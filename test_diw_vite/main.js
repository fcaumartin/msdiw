import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import './style.css'

const element = document.querySelector("#div1>span");

element.innerHTML = "Modifié ";

const champ_texte = document.querySelector("#text1");

champ_texte.value = "test..."

champ_texte.addEventListener("input", () => {
    console.log(champ_texte.value)
    if (champ_texte.value == "toto") {
        element.innerHTML = "Gagné !!!"
    }
})


