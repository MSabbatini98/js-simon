// variabili
var array = [];
var num = prompt("Memorizza i seguenti numeri, tra 30sec dovrai riscriverli" + array);


// corpo del programma
num = isNumber(num);
// time = isNumber(time);
    //* 1. genera ed esponi 5 numeri casuali
array = getRandom(0, 100, 5);
console.log(array)










// definizioni funzioni
function timer(value){
    setTimeout(() => {
        console.log("sono passati 3ss")
    }, 3000);
}

function isNumber(num) {
    var num = parseInt(num);
    while (isNaN(num) != true && num <= 0) {
        num = parseInt(prompt("Hello"));
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

// 2. timer 30 sec
// 3. inserisci uno alla volta i 5 numeri
// 4. controlla quanti ne hai fatti giusti e quanti sbagliati