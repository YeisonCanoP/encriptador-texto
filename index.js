function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco= document.getElementById("imagen-muñeco")


    let textoCifrado = texto
        .repleace(/a/gi, "ai")
        .repleace(/e/gi, "enter")
        .repleace(/i/gi, "imes")
        .repleace(/o/gi, "ober")
        .repleace(/u/gi, "ufat");

    if (texto.length != 0) {
        texto = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito.";
        parrafo.textContent = "";
        muñeco.src="imagenes/online-store.png"; 
    }
    else {
        muñeco.src="imagenes/Muñeco.png";
        alert("Debes ingresar algun texto.");
    }

}

