/*const cipher = {
  // ...
};

export default cipher;*/


/*Cifrado*/
document.addEventListener("click",texto);

function texto(){
  let letras = document.getElementById('box').value;
  let numero = document.getElementById("num").value; 
  let mensaje = letras.toUpperCase();
  console.log(letras);
  console.log(mensaje);
  console.log(typeof mensaje);
  console.log("Tu número secreto es " + numero);
  

  /*for(let i = 0; i < caracter.length; i++){
  console.log("Los elementos son:"+ (caracter[i]));*/

  for(let i = 0; i < mensaje.length; i++){
    let caracter = mensaje.charCodeAt([i]);
    console.log("número ASCII " + caracter);
    //console.log(typeof caracter); -prueba de consola
    let ejemplo= (caracter- 65 + numero) % 26 + 65; //FÓRMULA
    console.log("el nuevo valor es " + ejemplo);

    /* Intento de hacer un ciclo para que al valor de caracter mayor a 90- tenga los valores ASCII DEL INICIO (65)
    if(caracter>90){
      caracter =(caracter-90) + 65;
      return("valor con while" + caracter);
    }
    if caracter*/
    //console.log("nuevos valores " + ejemplo);
    
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
  

