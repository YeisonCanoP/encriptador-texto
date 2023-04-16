function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("imagen-muñecos");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito.";
        parrafo.textContent = "";
        muñeco.src = "imagenes/security.png";
    }
    else {
        muñeco.src="imagenes/Muñeco.png";
        swal("Oopss!","Debes ingresar algun texto.","warning");
        tituloMensaje.textContent = "Ningun mensaje fue encontrado"
        parrafo.textContent = "Ingresa el texto que deseas Encriptar o Desencriptar"
    }
}
function desencriptar () {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("imagen-muñecos");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con exito.";
        parrafo.textContent = "";
        muñeco.src = "imagenes/solution.png";
    }
    else {
        muñeco.src="imagenes/Muñeco.png";
        swal("Oopss!","Debes ingresar algun texto.","warning");
        tituloMensaje.textContent = "Ningun mensaje fue encontrado"
        parrafo.textContent = "Ingresa el texto que deseas Encriptar o Desencriptar"
    }
}
function copiar() {
    var texto=document.getElementById("texto").value;
    var elementoTemporal= document.createElement("textarea");
    var botonEncriptar= document.getElementById("btn-copiar");
    elementoTemporal.value= texto;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(elementoTemporal);
    botonEncriptar.innerText = "Copiado";
    setTimeout(function() {
        botonEncriptar.innerText = "Copiar";
      }, 1000);
}
