import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import './style.css'

const element = document.querySelector("#div1");

const champ_texte = document.querySelector("#text1");

champ_texte.addEventListener("input", () => {
    const re = /^[0-9]{3,7}$/;
    if (re.test(champ_texte.value)) {
        element.innerHTML = "Good !!!"
    }
    else {
        element.innerHTML = "Bad :-("
    }
})


