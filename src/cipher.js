window.cipher = {
  encode:(offset,string) => {
    let answerCipher = '';
 
    for (let i = 0; i < string.length; i++) {
      let positionAscii = string.charCodeAt(i);
      if(65<= positionAscii && positionAscii<=90){
        answerCipher += String.fromCharCode((positionAscii-65+offset)%26+65); 
      }
      else if(97<= positionAscii && positionAscii<=122 ){
        answerCipher += String.fromCharCode((positionAscii-97+offset)%26+97);
      }
      else {
       answerCipher += String.fromCharCode(positionAscii);
      }
    }
    return answerCipher;
  },

  decode:(offset,string)=> {
    let answerDecipher = '';
    
    for (let i = 0; i < string.length; i++) {
      let positionAsciiD = string.charCodeAt(i);
      if(65<= positionAsciiD && positionAsciiD<=90){
        answerDecipher += String.fromCharCode((positionAsciiD-90-offset)%26+90); 
      }
      else if(97<= positionAsciiD && positionAsciiD<=122 ){
       answerDecipher += String.fromCharCode((positionAsciiD-122-offset)%26+122);
     }
      else {
       answerDecipher += String.fromCharCode(positionAsciiD);
      }
    }
    return answerDecipher;
  },

  createCipherWithOffset:(offset)=> {
    let newObject = {
     encode:(string)=> {
       return(offset,string);
     },
     decode:(string)=> {
       return(offset,string);
      }
    }
    return newObject;
  },  

  
  
  
};
