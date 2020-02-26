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



for (var i = 0; i < 10; i++) {
var tentativo = parseInt(prompt('scrivi un numero da 1 a 100'));

console.log(numeroTenativi);
console.log(tentativo);
if (!numeriRandom.includes(tentativo)) {



    if (!numeroTenativi.includes(tentativo)) {


        if (!isNaN(tentativo)) {

            if (tentativo < 101 && tentativo >= 1) {


                console.log('scegli altro numero');
                numeroTenativi.push(tentativo);
            }
            else {

                console.log('scegli un numero compreso tra 1 e 100');
            }
        }
        else {
            console.log('hai scritto una parola non un numero');
        }

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
