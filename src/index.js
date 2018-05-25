//mandamos llamar a los elementos
let btn = document.getElementById('btn');
let cipher = document.getElementById('cipher');
let decipher = document.getElementById('decipher');

cipher.style.visibility = 'hidden';
decipher.style.visibility = 'hidden';



//cifrar
let btn1 = document.getElementById('btn1');
btn1.addEventListener('click', cifrar);

function cifrar() {
 btn.style.display = 'none';
 cipher.style.visibility= 'visible';
 let send=document.getElementById('send');
 send.addEventListener('click', code);

 function code() {
     btn.style.display = 'none';
     let key1= parseInt(document.getElementById('key1').value);
     let phrase = document.getElementById('phrase').value;
     let cipher = '';
 
     for (let i = 0; i < phrase.length; i++) {
         let positionAscii = phrase.charCodeAt(i);
         if(65<= positionAscii && positionAscii<=90){
             cipher += String.fromCharCode((positionAscii-65+key1)%26+65); 
            }
         else if(97<= positionAscii && positionAscii<=122 ){
             cipher += String.fromCharCode((positionAscii-97+key1)%26+97);
            
            }
         else {
             cipher += String.fromCharCode(positionAscii);

            }
        }
    document.getElementById('cifrado').innerHTML=cipher;
    }

}

//decifrar
let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', decifrar);
function decifrar(){
    btn.style.display = 'none';
    decipher.style.visibility ='visible';
    cipher.style.display = 'none';


}

