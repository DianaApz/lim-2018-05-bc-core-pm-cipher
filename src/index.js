//mandamos llamar a los elementos
let introduction= document.getElementById('introduction');
let cipher= document.getElementById('cipher');
let decipher= document.getElementById('decipher');

cipher.style.visibility= 'hidden';
decipher.style.visibility= 'hidden';
introduction.style.visibility='visible'; 

//inicio
let home= document.getElementById('home');
home.addEventListener('click',inicio);

function inicio(){
    cipher.style.visibility= 'hidden';
    decipher.style.visibility= 'hidden';
    introduction.style.visibility='visible'; 
}

//cifrar
let pageOne= document.getElementById('pageOne');
pageOne.addEventListener('click', cifrar);



function cifrar() {
  introduction.style.visibility='hidden';
  decipher.style.visibility = 'hidden';
  cipher.style.visibility= 'visible';

  let send1=document.getElementById('send1');
  send1.addEventListener('click', code);
}

function code() {
    let number1= parseInt(document.getElementById('number1').value);
    let phrase1 = document.getElementById('phrase1').value;
    let answerCipher = '';
 
    for (let i = 0; i < phrase1.length; i++) {
        let positionAscii = phrase1.charCodeAt(i);
        if(65<= positionAscii && positionAscii<=90){
            answerCipher += String.fromCharCode((positionAscii-65+number1)%26+65); 
        }
        else if(97<= positionAscii && positionAscii<=122 ){
            answerCipher += String.fromCharCode((positionAscii-97+number1)%26+97);
            
        }
        else {
            answerCipher += String.fromCharCode(positionAscii);

        }
    }
    document.getElementById('answer1').innerHTML=answerCipher;
    

}

//decifrar
let pageTwo = document.getElementById('pageTwo');
pageTwo.addEventListener('click', decifrar);

function decifrar(){
    introduction.style.visibility = 'hidden';
    cipher.style.display = 'none';
    decipher.style.visibility ='visible';
    
    let send2=document.getElementById('send2');
    send2.addEventListener('click', decode);
}
   
function decode() {
       
    let number2= parseInt(document.getElementById('number2').value);
    let phrase2 = document.getElementById('phrase2').value;
    let answerDecipher = '';
    
    for (let i = 0; i < phrase2.length; i++) {
        let positionAsciiD = phrase2.charCodeAt(i);
        if(65<= positionAsciiD && positionAsciiD<=90){
         answerDecipher += String.fromCharCode((positionAsciiD-90-number2)%26+90); 
        }
        else if(97<= positionAsciiD && positionAsciiD<=122 ){
         answerDecipher += String.fromCharCode((positionAsciiD-122-number2)%26+122);
               
        }
        else {
         answerDecipher += String.fromCharCode(positionAsciiD);
   
        }
    }
    document.getElementById('answer2').innerHTML= answerDecipher;
    


}
