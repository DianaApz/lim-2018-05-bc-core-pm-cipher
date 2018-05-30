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

    document.getElementById('send1').addEventListener('click', ()=>{
     let number1= parseInt(document.getElementById('number1').value);
     let phrase1 = document.getElementById('phrase1').value;
     let answer1= document.getElementById('answer1');
     answer1.innerHTML= window.cipher.encode(number1,phrase1);
    });

}

    


//decifrar
let pageTwo = document.getElementById('pageTwo');
pageTwo.addEventListener('click', decifrar);

function decifrar(){
    introduction.style.visibility = 'hidden';
    cipher.style.display = 'none';
    decipher.style.visibility ='visible';
    
    document.getElementById('send2').addEventListener('click', ()=>{
     let number2= parseInt(document.getElementById('number2').value);
     let phrase2 = document.getElementById('phrase2').value;
     let answer2= document.getElementById('answer2');
     answer2.innerHTML= window.cipher.decode(number2,phrase2);
    });
}
