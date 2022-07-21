/*const cipher = {
  // ...
};

export default cipher;*/


/*Cifrado*/
document.addEventListener("click",texto);

function texto(){
  let mensaje = document.getElementById('box').value;
  let numero = document.getElementById("num").value; 
  console.log(mensaje);
  console.log(typeof mensaje);
  console.log("Tu número secreto es " + numero);
  
  /*let caracter = mensaje.split('');
  console.log(caracter);*/
 /* let caracter = mensaje.split("");*/

  /*for(let i = 0; i < caracter.length; i++){
  console.log("Los elementos son:"+ (caracter[i]));*/

  for(let i = 0; i < mensaje.length; i++){
    let caracter = mensaje.charCodeAt([i]);
    console.log(caracter); 
  }

    /*let codMes = mensaje.charCodeAt(0); /*Iterar el mensaje para que haga lo mismo con cada caracter"
    console.log(codMes);
    console.log(numero);*/
  
}

/*function cifrado(){

  let codMes = mensaje.charCodeAt(0); 
  console.log(codMes);
  
}*/



  


/*Fórmula

(x-65+n)%26+65*/
  


/* variables - recibir un número (input)
   función--¿objeto?
   iterar elementos
   asignar valores diferentes dependiendo del input
   regresar nuevos valores*/
