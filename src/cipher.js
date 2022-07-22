/*const cipher = {
  // ...
};

export default cipher;*/


/*Cifrado*/

document.addEventListener("click",texto);

function texto(){
  let letras = document.getElementById('box').value;
  let numero = parseInt(document.getElementById("num").value); 
  let mensaje = letras.toUpperCase();

  console.log(letras);
  console.log(mensaje);
  console.log(typeof mensaje);
  console.log("Tu número secreto es " + numero);
  console.log(typeof numero);
  

  for(let i = 0; i < mensaje.length; i++){
    let caracter = mensaje.charCodeAt([i]);
    console.log("número ASCII " + caracter);
    caracter= (caracter- 65 + numero)% 26 + 65; //FÓRMULA
    console.log("el nuevo valor es " + caracter);
    caracter = String.fromCharCode(caracter);
    console.log(caracter);
    //alert("tu mensaje secreto es: " + (caracter[i]));
  }
  
}

/*function cifrar(caracter, numero){
  let mensajeCifrado= (caracter[i] - 65 + numero)% 26 +65;
  console.log(mensajeCifrado);
}

function cifrado(){

  let codMes = mensaje.charCodeAt(0); 
  console.log(codMes);
  
}*/



/*Fórmula

(x-65+n)%26+65*/
  

