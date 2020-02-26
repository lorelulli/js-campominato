// 16 numeri casuali da 1 a 100
// utente scrive numeri da 1 a 100 una alla volte
// se il numero è presente nella lista random finisce, sennò si continua
// quando finisce bisogna stampare il numero di volte che si è inserito il numero

var numeriRandom = [];
var numeroTenativi = [];

for (var i = 0; i < 16; i++) {
var numeroRandom = numeriRandom.push(generaRandom(1,100))

}
console.log(numeriRandom);



for (var i = 0; i < 83; i++) {
var tentativo = parseInt(prompt('scrivi un numero'));

console.log(numeroTenativi);
console.log(tentativo);
if (!numeriRandom.includes(tentativo)) {



    if (!numeroTenativi.includes(tentativo)) {
        numeroTenativi.push(tentativo);
        console.log('scegli altro numero');

    }
    else {
        
        console.log('numero ripetuto');

    }


}

else {
    console.log('hai perso');
    break;
}


}



console.log('hai indovinato ' + numeroTenativi.length + ' numeri');


function generaRandom(min, max) {
    numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}
