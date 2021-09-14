function conversor(elEvento){
    elEvento.preventDefault()

    var libras = document.querySelector("#libras").value;
    var operacion = (libras * (1/2.20462));

    respuesta_kilos.innerHTML = operacion.toFixed(2);
}

var boton = document.querySelector("#boton");
boton.addEventListener("click", conversor);