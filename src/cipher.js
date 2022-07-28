const cipher = {
  
  encode: function(offset, string){
  
    console.log(string);
    console.log(typeof string);
    console.log("Tu número secreto es " + offset);
    console.log(typeof offset);
    
    let ejemplo = '';
  
    for(let i = 0; i < string.length; i++){
      let caracter = string.charCodeAt([i]);
      console.log("número ASCII " + caracter);
      caracter= (caracter- 65 + offset)% 26 + 65; //FÓRMULA
      console.log("el nuevo valor es " + caracter);
      caracter = String.fromCharCode(caracter);
      console.log(caracter);
      ejemplo = ejemplo + caracter; 
    }
  
    return(ejemplo);
    
  },

  decode: function(offset, string){
    console.log(string);
    console.log("offset: " + offset);
  
    let mensajeDecifrado= '';
  
    for(let i = 0; i < string.length; i++){
      let caracter = string.charCodeAt([i]);
      console.log("número ASCII " + caracter);
      caracter = ((caracter - 65) - offset) % 26;
      console.log(caracter);
      if(caracter < 0){
        caracter = ((caracter % 26) + 26) + 65;
        caracter = String.fromCharCode(caracter);
        console.log(caracter);
      } else{
        caracter = caracter + 65;
        caracter = String.fromCharCode(caracter);
        console.log(caracter);
      }
      
      mensajeDecifrado = mensajeDecifrado + caracter;

      console.log(mensajeDecifrado);
    }
    
    return(mensajeDecifrado);
  }
};

export default cipher;



  

