/*
isspausdinti skaicius intervale
*/

for (let i = 0; i < 5; i++) {
    console.log(i);
}


const nuo = 2;
const iki = 9;

for (let i = nuo; i <= iki; i++) {
    console.log(i);
}


console.log('-------------------');


/*
isspausdinti skaicius intervale, bet padvigubintus (ar bet kokia kita matematine operacija)
*/


const nuo2 = 2;
const iki2 = 7;

for (let i = nuo2; i <= iki2; i++) {
    console.log(i * 2);
}


console.log('------------------');


/*
Turime sarasa (array) ir reikia isspausdinti visas jo reiksmes
*/


const marks = [9, 4, 6, 7, 3, 10, 5, 8];

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}
