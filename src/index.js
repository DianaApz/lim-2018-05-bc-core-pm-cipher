var frase = prompt('frase');
var phrase= frase.toUpperCase();
for (var letter = 0; letter < phrase.length; letter++) {
var ascii = phrase.charCodeAt(letter);
document.write(ascii);
    }