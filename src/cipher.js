const cipher = {
  
  encode: function(offset, string){
  
    let mensajeCifrado = '';
  
    if(offset <= 0 && typeof string != "string"){
      throw new TypeError();
    }
    for(let i = 0; i < string.length; i++){
      let caracter = string.charCodeAt([i]);
      if(caracter >= 65 && caracter <= 90){
      caracter= (caracter- 65 + offset)% 26 + 65;
      caracter = String.fromCharCode(caracter);
      mensajeCifrado += caracter; 
    }
  if(caracter >= 97 && caracter <= 122){
      caracter= (caracter- 97 + offset)% 26 + 97;
      caracter = String.fromCharCode(caracter);
      mensajeCifrado += caracter; 
    }
  }
    return(mensajeCifrado);
    
  
},
  decode: function(offset, string){
  
    let mensajeDecifrado= '';
    if(offset <= 0 && typeof string != "string"){
      throw new TypeError();
    }
    for(let i = 0; i < string.length; i++){
      let caracter = string.charCodeAt([i]);
      if(caracter >= 65 && caracter <= 90){
      caracter = ((caracter - 65) - offset) % 26;
      if(caracter < 0){
        caracter = ((caracter % 26) + 26) + 65;
        caracter = String.fromCharCode(caracter);
      } else{
        caracter += 65;
        caracter = String.fromCharCode(caracter);
      }}
      if(caracter >= 97 && caracter <= 122){
        caracter = ((caracter - 97) - offset) % 26;
        if(caracter < 0){
          caracter = ((caracter % 26) + 26) + 97;
          caracter = String.fromCharCode(caracter);
        } else{
          caracter += 97;
          caracter = String.fromCharCode(caracter);
        }
      }

      mensajeDecifrado += caracter;

    }
    
    return(mensajeDecifrado);
  }
};

export default cipher;



  

