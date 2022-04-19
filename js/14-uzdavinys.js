/*
jeigu, dabar yra 00:00 iki 4.59 -> naktis
jeigu, dabar yra 5:00 iki 10.59 -> rytas
jeigu, dabar yra 11:00 iki 18.59 -> diena
jeigu, dabar yra 19:00 iki 23.59 -> vakaras
*/


function parosMetas(val, min) {
    if (val < 5) {
        return 'naktis';
    }
    if (val < 11) {
        return 'rytas';
    }
    if (val < 19) {
        return 'diena';
    }
    if (val < 24) {
        return 'vakaras';
    }
}

console.log(parosMetas(14, 15));
console.log(parosMetas(1, 43));
console.log(parosMetas(7, 15));
console.log(parosMetas(23, 55));


/*
Automobilis:
- kuro kiekis (ltr)
- kuro sanaudos (ltr/km)
- norimas nuvaziuoti atstumas (km)

Ar pavyks nuvaziuoti atstuma?
*/


function drive(kiekis, sanaudos, atstumas) {
    const imanomasAtstumas = kiekis / sanaudos * 100;
        console.log(imanomasAtstumas);

        if (imanomasAtstumas >= atstumas) {
            return true;
    } 
            return false;
}

const try1 = drive(20, 5, 400);     // true
const try2 = drive(20, 5, 1);       // true
const try3 = drive(20, 5, 401);     // false
const try4 = drive(10, 10, 300);    // false

console.log(try1);
console.log(try2);
console.log(try3);
console.log(try4);