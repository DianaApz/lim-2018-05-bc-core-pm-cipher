//mandamos llamar a los elementos
let introduction= document.getElementById('introduction');
let cipher= document.getElementById('cipher');
let decipher= document.getElementById('decipher');

cipher.style.display= 'none';
decipher.style.display= 'none'; 

//inicio
let home= document.getElementById('home');
home.addEventListener('click',inicio);

function inicio(){
    cipher.style.display= 'none';
    decipher.style.display= 'none';
    introduction.style.display='block'; 
}

//cifrar
let pageOne= document.getElementById('pageOne');
pageOne.addEventListener('click', cifrar);



function cifrar() {
  introduction.style.display='none';
  decipher.style.display = 'none';
  cipher.style.display='block';

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
    introduction.style.display = 'none';
    cipher.style.display = 'none';
    decipher.style.display ='block';
    
    document.getElementById('send2').addEventListener('click', ()=>{
     let number2= parseInt(document.getElementById('number2').value);
     let phrase2 = document.getElementById('phrase2').value;
     let answer2= document.getElementById('answer2');
     answer2.innerHTML= window.cipher.decode(number2,phrase2);
    });
}