
/*----------------------------------- Piscina rectangular -----------------------------------*/
//Efecto en tarjetas (girar 180 grados)
const cardContainerRectangulo = document.getElementById("card-container-rectangulo")
const formContainerRectangulo = document.getElementById("form-container-rectangulo")
const portadaRectangulo = document.getElementById("portada-rectangulo")
const tituloRectangulo = document.getElementById("titulo-rectangulo")
const formRectangulo = document.getElementById("formulario-rectangulo")

cardContainerRectangulo.addEventListener('click', function(e) {
    if(e.target === portadaRectangulo || e.target === tituloRectangulo || e.target === formRectangulo) {
        formContainerRectangulo.classList.toggle('voltear')
    }
});

//Recupero de valores de los inputs, borrado del valor por defecto e inserción del resultado en textArea (sólo lectura)
document.getElementById("formulario-rectangulo").addEventListener('submit', function(event) {
    event.preventDefault();
    let resultado = document.getElementById("rectangular-lenght").valueAsNumber *
                    document.getElementById("rectangular-width").valueAsNumber *
                    ((document.getElementById("rectangular-depth-high").valueAsNumber +
                    document.getElementById("rectangular-depth-low").valueAsNumber) /2);
                    document.getElementById("resultado-rectangulo").textContent =
                    " El volumen de la piscina es:\n" + Math.round(resultado) * 1000 + " litros."
})

//El valor de los inputs por defecto es 0. Esta función limpia el campo al hacer click en él.
document.getElementById("formulario-rectangulo").addEventListener('click', function(e) {
    if(e.target.tagName= "INPUT") {
        e.target.value =""
    }
})

//Se aprovecha el click para limpiar el formulario y se deja sin valor el campo donde se expresa el resultado.
document.getElementById("reset-rectangulo").addEventListener('click', function() {
    document.getElementById("resultado-rectangulo").textContent = ""
})
/*----------------------------------- Piscina rectangular -----------------------------------*/


/*------------------------------------- Piscina redonda -------------------------------------*/
//Efecto en tarjetas (girar 180 grados)
const cardContainerRedondo = document.getElementById("card-container-redondo")
const formContainerRedondo = document.getElementById("form-container-redondo")
const portadaRedondo = document.getElementById("portada-redondo")
const tituloRedondo = document.getElementById("titulo-redondo")
const formRedondo = document.getElementById("formulario-redondo")
const Round = 0.785

cardContainerRedondo.addEventListener('click', function(e) {
    if(e.target === portadaRedondo || e.target === tituloRedondo || e.target === formRedondo) {
        formContainerRedondo.classList.toggle('voltear')
    }
});

//Recupero de valores de los inputs, borrado del valor por defecto e inserción del resultado en textArea (sólo lectura)
document.getElementById("formulario-redondo").addEventListener('submit', function(event) {
    event.preventDefault();
    let resultado = ((document.getElementById("diameter").valueAsNumber) **2) *
                    ((document.getElementById("round-depth-high").valueAsNumber +
                    document.getElementById("round-depth-low").valueAsNumber) /2) *
                    Round;
                    document.getElementById("resultado-redondo").textContent =
                    " El volumen de la piscina es:\n" + Math.round(resultado) * 1000 + " litros."
})

//El valor de los input por defecto es 0. Esta función limpia el campo al hacer click en él.
document.getElementById("formulario-redondo").addEventListener('click', function(e) {
    if(e.target.tagName= "INPUT") {
        e.target.value =""
    }
})

//Se aprovecha el click para limpiar el formulario y se deja sin valor el campo donde se expresa el resultado.
document.getElementById("reset-redondo").addEventListener('click', function(){
    document.getElementById("resultado-redondo").textContent = ""
})
/*------------------------------------- Piscina redonda -------------------------------------*/


/*------------------------------------- Piscina ovalada -------------------------------------*/
//Efecto en tarjetas (girar 180 grados)
const cardContainerOvalo = document.getElementById("card-container-ovalo")
const formContainerOvalo = document.getElementById("form-container-ovalo")
const portadaOvalo = document.getElementById("portada-ovalo")
const tituloOvalo = document.getElementById("titulo-ovalo")
const formOvalo = document.getElementById("formulario-ovalo")
const Oval = 0.89

cardContainerOvalo.addEventListener('click', function(e) {
    if(e.target === portadaOvalo || e.target === tituloOvalo || e.target === formOvalo) {
        formContainerOvalo.classList.toggle('voltear')
    }
});

//Recupero de valores de los inputs, borrado del valor por defecto e inserción del resultado en textArea (sólo lectura)
document.getElementById("formulario-ovalo").addEventListener('submit', function(event) {
    event.preventDefault();
    let resultado = document.getElementById("oval-lenght").valueAsNumber *
                    document.getElementById("oval-width").valueAsNumber *
                    ((document.getElementById("oval-depth-high").valueAsNumber +
                    document.getElementById("oval-depth-low").valueAsNumber) /2) *
                    Oval;
                    document.getElementById("resultado-ovalo").textContent =
                    " El volumen de la piscina es:\n" + Math.round(resultado) * 1000 + " litros."
})

//El valor de los input por defecto es 0. Esta función limpia el campo al hacer click en él.
document.getElementById("formulario-ovalo").addEventListener('click', function(e) {
    if(e.target.tagName= "INPUT") {
        e.target.value =""
    }
})

//Se aprovecha el click para limpiar el formulario y se deja sin valor el campo donde se expresa el resultado.
document.getElementById("reset-ovalo").addEventListener('click', function(){
    document.getElementById("resultado-ovalo").textContent = ""
})
/*------------------------------------- Piscina ovalada -------------------------------------*/


/*-------------------------------------- Piscina riñón --------------------------------------*/
//Efecto en tarjetas (girar 180 grados)
const cardContainerRinon = document.getElementById("card-container-rinon")
const formContainerRinon = document.getElementById("form-container-rinon")
const portadaRinon = document.getElementById("portada-rinon")
const tituloRinon = document.getElementById("titulo-rinon")
const formRinon = document.getElementById("formulario-rinon")
const Kidney = 0.45

cardContainerRinon.addEventListener('click', function(e) {
    if(e.target === portadaRinon || e.target === tituloRinon || e.target === formRinon) {
        formContainerRinon.classList.toggle('voltear')
    }
});

//Recupero de valores de los inputs, borrado del valor por defecto e inserción del resultado en textArea (sólo lectura)
document.getElementById("formulario-rinon").addEventListener('submit', function(event) {
    event.preventDefault();
    let resultado = document.getElementById("kidney-lenght").valueAsNumber *
                    (document.getElementById("kidney-width-high").valueAsNumber +
                    document.getElementById("kidney-width-low").valueAsNumber) *
                    ((document.getElementById("kidney-depth-high").valueAsNumber +
                    document.getElementById("kidney-depth-low").valueAsNumber) /2) *
                    Kidney;
                    document.getElementById("resultado-rinon").textContent =
                    " El volumen de la piscina es:\n" + Math.round(resultado) * 1000 + " litros."
})

//El valor de los inputs por defecto es 0. Esta función limpia el campo al hacer click en él.
document.getElementById("formulario-rinon").addEventListener('click', function(e) {
    if(e.target.tagName= "INPUT") {
        e.target.value =""
    }
})

//Se aprovecha el click para limpiar el formulario y se deja sin valor el campo donde se expresa el resultado.
document.getElementById("reset-rinon").addEventListener('click', function() {
    document.getElementById("resultado-rinon").textContent = ""
})
/*-------------------------------------- Piscina riñón --------------------------------------*/


/*----------------------------------- Piscina triangular ------------------------------------*/
//Efecto en tarjetas (girar 180 grados)
const cardContainerTriangulo = document.getElementById("card-container-triangulo")
const formContainerTriangulo = document.getElementById("form-container-triangulo")
const portadaTriangulo = document.getElementById("portada-triangulo")
const tituloTriangulo = document.getElementById("titulo-triangulo")
const formTriangulo = document.getElementById("formulario-triangulo")

cardContainerTriangulo.addEventListener('click', function(e) {
    if(e.target === portadaTriangulo || e.target === tituloTriangulo || e.target === formTriangulo) {
        formContainerTriangulo.classList.toggle('voltear')
    }
});

//Recupero de valores de los inputs, borrado del valor por defecto e inserción del resultado en textArea (sólo lectura)
document.getElementById("formulario-triangulo").addEventListener('submit', function(event) {
    event.preventDefault();
    let resultado = ((document.getElementById("triangular-lenght").valueAsNumber *
                    document.getElementById("triangular-width").valueAsNumber)/2) *
                    ((document.getElementById("triangular-depth-high").valueAsNumber +
                    document.getElementById("triangular-depth-low").valueAsNumber) /2);
                    document.getElementById("resultado-triangulo").textContent =
                    " El volumen de la piscina es:\n" + Math.round(resultado) * 1000 + " litros."
})

//El valor de los inputs por defecto es 0. Esta función limpia el campo al hacer click en él.
document.getElementById("formulario-triangulo").addEventListener('click', function(e) {
    if(e.target.tagName= "INPUT") {
        e.target.value =""
    }
})

//Se aprovecha el click para limpiar el formulario y se deja sin valor el campo donde se expresa el resultado.
document.getElementById("reset-triangulo").addEventListener('click', function() {
    document.getElementById("resultado-triangulo").textContent = ""
})
/*----------------------------------- Piscina triangular ------------------------------------*/
