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
    var key1= document.getElementById('key1').value;
    var phrase = document.getElementById('phrase').value;
    var phrase1= phrase.toUpperCase();
    for (var letter = 0; letter < phrase1.length; letter++) {
        var positionAscii = phrase1.charCodeAt(letter);
        var positionCipher = (positionAscii-65+key1)%26+65;
        var cipher = String.fromCharCode(positionCipher);
        
    }
    document.getElementById('cifrado').innerHTML= cipher;
   
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



