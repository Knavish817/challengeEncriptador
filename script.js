var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var muneco = document.querySelector(".cotenedorMuneco");
var contenedor = document.querySelector(".contenedorParrafo");
var resultado = document.querySelector(".textoResultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajaTexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajaTexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajaTexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajaTexto);
}

function recuperarTexto(){
    var cajaTexto = document.querySelector(".cajaTexto");
    return cajaTexto.value;
}

function ocultarAdelante(){
    muneco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal += "ai";
        }
        else if(texto[i] == "e"){
            textoFinal += "enter";
        }
        else if(texto[i] == "i"){
            textoFinal += "imes";
        }
        else if(texto[i] == "o"){
            textoFinal += "ober";
        }
        else if(texto[i] == "u"){
            textoFinal += "ufat";
        }
        else{
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var textoFinal = "";

    for(var i = 0; i < mensaje.length; i++){
        if(mensaje.substring(i, i+2) == "ai"){
            textoFinal += "a";
            i++;
        }
        else if(mensaje.substring(i, i+5) == "enter"){
            textoFinal += "e";
            i += 4;
        }
        else if(mensaje.substring(i, i+4) == "imes"){
            textoFinal += "i";
            i += 3;
        }
        else if(mensaje.substring(i, i+4) == "ober"){
            textoFinal += "o";
            i += 3;
        }
        else if(mensaje.substring(i, i+4) == "ufat"){
            textoFinal += "u";
            i += 3;
        }
        else{
            textoFinal += mensaje[i];
        }
    }

    return textoFinal;
}

const btnCopiar = document.querySelector(".btn-copiar"); 
btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".textoResultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("Texto copiado: " + contenido); 
});
