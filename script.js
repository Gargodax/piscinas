
/*----------------------------------- Piscina rectangular -----------------------------------*/
const cardContainerRectangulo = document.getElementById("card-container-rectangulo")
const formContainerRectangulo = document.getElementById("form-container-rectangulo")
const portadaRectangulo = document.getElementById("portada-rectangulo")
const formRectangulo = document.getElementById("formulario-rectangulo")

cardContainerRectangulo.addEventListener('click', function(e) {
    if(e.target === portadaRectangulo || e.target === formRectangulo) {
        formContainerRectangulo.classList.toggle('voltear')
    }
});

const btnRectangulo = document.getElementById("calcula-rectangulo");
const resetRectangulo = document.getElementById("reset-rectangulo");
var resultadoRectangulo = document.getElementById("resultado-rectangulo");



function calculaRectangulo() {
    let largo = document.getElementById("rectangular-lenght").value
    let ancho = document.getElementById("rectangular-width").value
    let playo = document.getElementById("rectangular-depth-low").value
    let profundo = document.getElementById("rectangular-depth-high").value
    resultadoRectangulo.textContent = ("Volumen de la piscina:\n" + (parseFloat(largo) * parseFloat(ancho) * ((parseFloat(playo) + parseFloat(profundo)) / 2)) * 1000 + " litros.")
}

function limpiarRectangulo() {
    resultadoRectangulo.textContent = ""
}

btnRectangulo.addEventListener("click", calculaRectangulo);
resetRectangulo.addEventListener("click", limpiarRectangulo);

/*----------------------------------- Piscina rectangular -----------------------------------*/


/*------------------------------------- Piscina redonda -------------------------------------*/
const cardContainerRedondo = document.getElementById("card-container-redondo")
const formContainerRedondo = document.getElementById("form-container-redondo")
const portadaRedondo = document.getElementById("portada-redondo")
const formRedondo = document.getElementById("formulario-redondo")

cardContainerRedondo.addEventListener('click', function(e) {
    if(e.target === portadaRedondo || e.target === formRedondo) {
        formContainerRedondo.classList.toggle('voltear')
    }
});

const Round = 0.785;
const btnRedondo = document.getElementById("calcula-redondo");
const resetRedondo = document.getElementById("reset-redondo");
var resultadoRedondo = document.getElementById("resultado-redondo");

function calculaRedondo() {
    let diametro = document.getElementById("diameter").value
    let playo = document.getElementById("round-depth-low").value
    let profundo = document.getElementById("round-depth-high").value
    resultadoRedondo.textContent = ("Volumen de la piscina:\n" + (parseFloat(diametro) * parseFloat(diametro) * ((parseFloat(playo) + parseFloat(profundo)) / 2) * Round) * 1000 + " litros.")
}

function limpiarRedondo() {
    resultadoRedondo.textContent = ""
}

btnRedondo.addEventListener("click", calculaRedondo);
resetRedondo.addEventListener("click", limpiarRedondo);
/*------------------------------------- Piscina redonda -------------------------------------*/


/*------------------------------------- Piscina ovalada -------------------------------------*/
const cardContainerOvalo = document.getElementById("card-container-ovalo")
const formContainerOvalo = document.getElementById("form-container-ovalo")
const portadaOvalo = document.getElementById("portada-ovalo")
const formOvalo = document.getElementById("formulario-ovalo")

cardContainerOvalo.addEventListener('click', function(e) {
    if(e.target === portadaOvalo || e.target === formOvalo) {
        formContainerOvalo.classList.toggle('voltear')
    }
});

const Oval = 0.89
const btnOvalo = document.getElementById("calcula-ovalo");
const resetOvalo = document.getElementById("reset-ovalo");
var resultadoOvalo = document.getElementById("resultado-ovalo");

function calculaOvalo() {
    let largo = document.getElementById("oval-lenght").value
    let ancho = document.getElementById("oval-width").value
    let playo = document.getElementById("oval-depth-low").value
    let profundo = document.getElementById("oval-depth-high").value
    resultadoOvalo.textContent = ("Volumen de la piscina:\n" + (parseFloat(largo) * parseFloat(ancho) * ((parseFloat(playo) + parseFloat(profundo)) / 2) * Oval) * 1000 + " litros.")
}

function limpiarOvalo() {
    resultadoOvalo.textContent = ""
}

btnOvalo.addEventListener("click", calculaOvalo);
resetOvalo.addEventListener("click", limpiarOvalo);
/*-------------------------------------Piscina redonda-------------------------------------*/

/*-------------------------------------- Piscina riñón --------------------------------------*/
const cardContainerRinon = document.getElementById("card-container-rinon")
const formContainerRinon = document.getElementById("form-container-rinon")
const portadaRinon = document.getElementById("portada-rinon")
const formRinon = document.getElementById("formulario-rinon")

cardContainerRinon.addEventListener('click', function(e) {
    if(e.target === portadaRinon || e.target === formRinon) {
        formContainerRinon.classList.toggle('voltear')
    }
});

const Kidney = 0.45;
const btnRinon = document.getElementById("calcula-rinon");
const resetRinon = document.getElementById("reset-rinon");
var resultadoRinon = document.getElementById("resultado-rinon");

function calculaRinon() {
    let largo = document.getElementById("kidney-lenght").value
    let anchoMenor = document.getElementById("kidney-width-low").value
    let anchoMayor = document.getElementById("kidney-width-high").value
    let playo = document.getElementById("kidney-depth-low").value
    let profundo = document.getElementById("kidney-depth-high").value
    resultadoRinon.textContent = ("Volumen de la piscina:\n" + (parseFloat(largo) * (parseFloat(anchoMenor) + parseFloat(anchoMayor)) * ((parseFloat(playo) + parseFloat(profundo)) / 2) * Kidney) * 1000 + " litros.")
}
function limpiarRinon() {
    resultadoRinon.textContent = ""
}

btnRinon.addEventListener("click", calculaRinon);
resetRinon.addEventListener("click", limpiarRinon);
/*-------------------------------------- Piscina riñón --------------------------------------*/

