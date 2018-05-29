//mandamos llamar a los elementos
let btn = document.getElementById('btn');
let cipher = document.getElementById('cipher');
let decipher = document.getElementById('decipher');

cipher.style.visibility = 'hidden';
decipher.style.visibility = 'hidden';


//cifrar
let btn1 = document.getElementById('btn1');
btn1.addEventListener('click', cifrar)

function cifrar() {
  btn.style.visibility='hidden';
  cipher.style.visibility= 'visible';
  let send1=document.getElementById('send1');
  send1.addEventListener('click', code);
}

function code() {
    let key1= parseInt(document.getElementById('key1').value);
    let phrase1 = document.getElementById('phrase1').value;
    let answerCipher = '';
 
    for (let i = 0; i < phrase1.length; i++) {
        let positionAscii = phrase1.charCodeAt(i);
        if(65<= positionAscii && positionAscii<=90){
            answerCipher += String.fromCharCode((positionAscii-65+key1)%26+65); 
        }
        else if(97<= positionAscii && positionAscii<=122 ){
            answerCipher += String.fromCharCode((positionAscii-97+key1)%26+97);
            
        }
        else {
            answerCipher += String.fromCharCode(positionAscii);

        }
    }
    document.getElementById('cifrado').innerHTML=answerCipher;
    

}

//decifrar
let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', decifrar);

function decifrar(){
    btn.style.display = 'hidden';
    decipher.style.visibility ='visible';
    cipher.style.display = 'none';
    let send2=document.getElementById('send2');
    send2.addEventListener('click', decode);
}
   
function decode() {
       
    let key2= parseInt(document.getElementById('key2').value);
    let phrase2 = document.getElementById('phrase2').value;
    let answerDecipher = '';
    
    for (let i = 0; i < phrase2.length; i++) {
        let positionAsciiD = phrase2.charCodeAt(i);
        if(65<= positionAsciiD && positionAsciiD<=90){
         answerDecipher += String.fromCharCode((positionAsciiD-90-key2)%26+90); 
        }
        else if(97<= positionAsciiD && positionAsciiD<=122 ){
         answerDecipher += String.fromCharCode((positionAsciiD-122-key2)%26+122);
               
        }
        else {
         answerDecipher += String.fromCharCode(positionAsciiD);
   
        }
    }
   document.getElementById('descifrado').innerHTML=answerDecipher;
    


}

let home = document.getElementById('home')
home.addEventListener('click',inicio);

function inicio(){
    cipher.style.visibility = 'hidden';
    decipher.style.visibility = 'hidden';
    btn.style.visibility='visible'; 
}