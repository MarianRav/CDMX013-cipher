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
  
    console.log("tu mensaje es: " + ejemplo);
    alert("Tu mensaje secreto es: " + ejemplo);
    
  },

  decode: function(offset, string){
    console.log(string);
    console.log(offset);
  
    let mensajeDecifrado= '';
  
    for(let i = 0; i < string.length; i++){
      let caracter = string.charCodeAt([i]);
      console.log("número ASCII " + string);
      caracter= (caracter- 65 -offset)% 26 + 65; //FÓRMULA
      caracter = String.fromCharCode(caracter);
     
      console.log(string);
      mensajeDecifrado = mensajeDecifrado + string;
    }
    alert("Tu mensaje es: " + mensajeDecifrado);
  }
};

export default cipher;



  

