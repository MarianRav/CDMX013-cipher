import cipher from './cipher.js';

const decipherButton= document.getElementById("decipher");


decipherButton.addEventListener("click", function(){
    let string = document.getElementById('boxTwo').value;
    let offset = parseInt(document.getElementById("number").value); 
    if(string ===""){
        alert("Ingresa un mensaje");
    }if(isNaN(offset)){
        alert("Ingresa un número");
    }else{
    const respuestaDescifrado = cipher.decode(offset, string);
    document.getElementById("mensajeDescifrado").style.display="block";
    document.getElementById("descifrado").style.display="none";
    document.getElementById("popUp").innerHTML = respuestaDescifrado
    }

});