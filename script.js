
/*----------------------------------- Piscina rectangular -----------------------------------*/
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
