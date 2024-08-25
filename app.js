const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

const input = document.getElementById("text-area");
    input.addEventListener("input", function() {
        const valor = input.value;
        const sinAcentos = valor.replace(/[^a-z0-9\s]/g,"");

        if (valor !== sinAcentos) {
            alert("Sin mayusculas, acentos ni caracteres especiales");
            input.value = sinAcentos;
        }
    }
);

/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" 
*/ 

function botonEncriptar(){
    const textoEncriptado = encriptar(textarea.value)
    mensaje.value = textoEncriptado
    textarea.value = "";
    mensaje.style.backgroundImage = "none"
    document.getElementById("boton-copiar").style.display = "show";
    document.getElementById("boton-pegar").style.display = "show";
    document.getElementById("boton-reiniciar").style.display = "show";
    document.getElementById("boton-copiar").style.display = "inherit";
    document.getElementById("boton-pegar").style.display = "inherit";
    document.getElementById("boton-reiniciar").style.display = "inherit";
}

function encriptar(stringEncriptado){
    let matrizCodigo =  [["e","enter" ], ["i","imes" ], ["a","ai" ], ["o","ober" ], ["u","ufat" ] ]
    stringEncriptado = stringEncriptado.toLowerCase()



    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }                 
    }
    return stringEncriptado
}

function botonDesencriptar(){
    const textoDesencriptado = desencriptar(textarea.value)
    mensaje.value = textoDesencriptado
    textarea.value = "";
    mensaje.style.backgroundImage = "none"
    document.getElementById("boton-copiar").style.display = "show";
    document.getElementById("boton-pegar").style.display = "show";
    document.getElementById("boton-reiniciar").style.display = "show";
    document.getElementById("boton-copiar").style.display = "inherit";
    document.getElementById("boton-pegar").style.display = "inherit";
    document.getElementById("boton-reiniciar").style.display = "inherit";
}   

function desencriptar(stringDesencriptado){
    let matrizCodigo =  [["e","enter" ], ["i","imes" ], ["a","ai" ], ["o","ober" ], ["u","ufat" ] ]
    stringDesencriptado = stringDesencriptado.toLowerCase()
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }                 
    }
    return stringDesencriptado
}

function copiar(){
    var contenido = document.querySelector("#mensaje");
    contenido.select();
    document.execCommand("copy");
} 

function pegar(){
    const destino = document.getElementById("text-area");
    navigator.clipboard.readText().then(texto => {
        destino.value = texto; 
    })
    .catch(error =>{
        console.error("Error al pegar el texto:", error);
    });
}

function botonReiniciar(){
    location.reload(true);
}

function mostrarOcultar(){
    var x = document.getElementById("text-area");
        if (x.type === "password"){
            x.type = "text";
        
        }else{
            x.type="password";
        }
}