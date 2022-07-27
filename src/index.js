import cipher from './cipher.js';

console.log(cipher);


const cipherButton = document.getElementById("botonCifrado");
console.log(cipherButton);

cipherButton.addEventListener("click",function(){
    let string = document.getElementById('box').value;
    let offset = parseInt(document.getElementById("num").value); 
    string = string.toUpperCase();
    const respuestaCifrado = cipher.encode(offset, string)
    document.getElementById("resultadoCifrado").style.display="block";
    document.getElementById("cifrado").style.display="none";
    document.getElementById("popUp").innerHTML = respuestaCifrado
});

//Preguntaa: Tengo dos pantallas y de acuerdo con el readme para los test, 
//las variables deben tener el mismo nombre, pero aquí me va a dar error
//debo hacer un archivo index. js para cada pantalla y no sean las mismas variables



const decipherButton= document.getElementById("decipher");
console.log(decipherButton);

decipherButton.addEventListener("click", function(){
    let string = document.getElementById('boxTwo').value;
    let offset = parseInt(document.getElementById("number").value); 
    string = string.toUpperCase();

    cipher.decode(offset,string);
});