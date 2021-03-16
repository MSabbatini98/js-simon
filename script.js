// ? Programma che chiede all'utente quanti numeri memorizzare e in quanto tempo
 // ? Dopodichè aspetta tot secondi e ti chiede per n volte (n = elementi dell'array da indovinare) il numero.
 // ? Dopo n volte ti dice quale è giusto e quale è sbagliato

// variabili
var array = [];
var user_num = 0;
var esito = "";
var chances = prompt("quanti numeri vuoi memorizzare?");
chances = isNumber(chances);
var win = 0;
var value = parseInt(prompt("Quanto tempo impiegheresti per memorizzare questi " + chances + " numeri"));
alert ("I numeri da ricordare sono : " + array)
value = isNumber(value) * 1000;
console.log(value);

// corpo del programma
// time = isNumber(time);
    // ! 1. genera ed esponi 5 numeri casuali
array = getRandom(0, 100, chances);
console.log(array);
    // !  2. timer 30 sec
    timer(value); //funzione che ti chiede di indovinare choice numeri dopo value millisecondi

// definizioni funzioni
function timer(value){
    setTimeout(() => {
        // !  3. inserisci uno alla volta i numeri
        for(var y = 0; y < chances; y++){
            console.log(chances + " win " + win)
            user_num = parseInt(prompt("Indovina i numeri \n tentativi rimanenti : " + (chances - win)));
            user_num = isNumber(user_num);
            // !  4. controlla quanti ne hai fatti giusti e quanti sbagliati
            if (array.includes(user_num)){
                esito += "<br>" + user_num + " è nella lista";
                win += 1;
            } else {
                esito += "<br>" + user_num + " NON è nella lista";
            }
        }
        
                esito += "<br>" + "hai indovinato " + win + " su " + chances;
        
            document.getElementById("outcome").innerHTML = esito
        console.log("sono passati " + value + "secondi")
    }, value);
}

function isNumber(num) {
    var num = parseInt(num);
    while (!isNaN(num) == false || num <= 0) {
       num = parseInt(prompt("Hai inserito un valore errato, inserisci un intero positivo"));
    }
        return num;
}

function getRandom(min, max, num) {
    var value_array = [];
    for (var i = 0; i < num; i++) {
        value_array.push(Math.floor(Math.random() * (max - min)) + min);
    }
    return value_array;
}

