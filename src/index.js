import cipher from './cipher.js';

const cipherButton = document.getElementById("botonCifrado");

cipherButton.addEventListener("click",function(){
    let string = document.getElementById('box').value;
    let offset = parseInt(document.getElementById("number").value); 
    if(string ===""){
        alert("Ingresa un mensaje");
    }if(isNaN(offset)){
        alert("Ingresa un número");
    }else{
    
    const respuestaCifrado = cipher.encode(offset, string);
    document.getElementById("resultadoCifrado").style.display="block";
    document.getElementById("cifrado").style.display="none";
    document.getElementById("popUp").innerHTML = respuestaCifrado;
    document.getElementById("recordatorio").innerText = "Copia el mensaje y recuerda compartir el número secreto (" + offset + "), con quien quieres compartir tu mensaje";
    }
});



