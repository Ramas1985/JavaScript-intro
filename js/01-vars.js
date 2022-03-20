/* 
Iniciavimo budas (keiciamumas ir scope):
 const- nekeiciama reiksme;
 let- keiciama reiksme;
 var- keiciama reiksme;

Kintamuju tipai:
 number (skaicius);
 string (tekstas);
 boolen (logine reiksme);
 array (sarasas, masyvas, matrica);
 object (objektas);
 null (reiksme kuri neegzistuoja, bet yra);
 undefined (neapibrezta);
*/

const metai = 2022;
console.log(metai);

const vardas = 'Vardenis';
console.log(vardas);

const arSninga = false;
console.log('ar snings:', arSninga);

const arTeigiama = true;
console.log('Ar teigiama:', arTeigiama);

const pazymiai = [10, 2, 8, 4];
console.log(pazymiai);

const zodynas = ['labas', 'rytas', 'tau'];
console.log(zodynas);

const petras = {
    vardas: 'Petras',
    amzius: 99,
    gyvenamojiVieta: 'Klaipeda',
    vaikai: [
        {
            vardas: 'Onute',
            amzius: 67
        }
    ]
};
console.log(petras);
