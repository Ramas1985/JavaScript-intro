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


/*
UZDUOTIS:
- gaminam pieno kokteilius
- gaunam uzsakymu kieki per diena (vienetais)
- gauname vienos porcijos dydi (litrais)
-vienos karves duodamo pieno kiekis per diena (litrais)
-reikia rasti: kiek karviu reikia tureti, norint ivygdyti visus uzsakymus?
*/

function milk(uzsakymai, porcija, pienoIsKarves) {
    // validation
    if (typeof uzsakymai === 'undefined') {
        return 'ERROR: neduotas pirmasis parametras';
    }
    if (typeof uzsakymai !== 'number') {
        return 'ERROR: pirmas parametras turi buti skaicius';
    }
    if (uzsakymai < 0) {
        return 'ERROR: pirmas parametras negali buti neigiamas'
    }
    if (uzsakymai % 1 !== 0) {
        return 'ERROR: pirmas parametras turi buti sveikasis skaicius';
    }

    if (typeof porcija === 'undefined') {
        return 'ERROR: neduotas antrasis parametras';
    }
    if (typeof porcija !== 'number') {
        return 'ERROR: antras parametras turi buti skaicius';
    }
    if (porcija < 0) {
        return 'ERROR: antras parametras negali buti neigiamas'; 
    }

    if (typeof pienoIsKarves === 'undefined') {
        return 'ERROR: neduotas treciasis parametras';
    }
    if (typeof pienoIsKarves !== 'number') {
        return 'ERROR: trecias parametras turi buti skaicius';
    }
    if (pienoIsKarves <= 0) {
        return 'ERROR: trecias parametras negali buti didesnis uz nuli';
    }

    //logic
    const reikiaPieno = uzsakymai * porcija;
    const reikiaKarviu = Math.ceil(reikiaPieno / pienoIsKarves);

    // return result
    return reikiaKarviu
}

console.log(milk('labas', 0.5, -9));
console.log(milk(100, true, -9));
console.log(milk(100, 0.5, 'pasidarem'));
console.log(milk(-100, 0.5, 9));
console.log(milk(100, -0.5, 9));
console.log(milk(100, 0.5, -9));
console.log(milk(100, 0.5));
console.log(milk(100));
console.log(milk());
console.log(milk(2.5, 0.5, 9));

console.log(milk(10, 0.5, 9), '->', 1);
console.log(milk(100, 0.5, 9), '->', 6);




const people = [
    { id: '1', name: 'John Smith', age: 20, hasCar: true },
    { id: '2', name: 'Ann Smith', age: 24, hasCar: false },
    { id: '3', name: 'Tom Jones', age: 31, hasCar: true },
    { id: '4', name: 'Rose Peterson', age: 17, hasCar: false },
    { id: '5', name: 'Alex John', age: 25, hasCar: true },
    { id: '6', name: 'Ronald Jones', age: 63, hasCar: true },
    { id: '7', name: 'Elton Smith', age: 16, hasCar: true },
    { id: '8', name: 'Simon Peterson', age: 30, hasCar: false },
    { id: '9', name: 'Daniel Cane', age: 51, hasCar: true },
  ];

  let filterCarOwners = people.filter(big => big.hasCar !== false);
  
  console.log(filterCarOwners);

  let filterAdults = people.filter(big => big.age >= 18);

  console.log(filterAdults);


 

