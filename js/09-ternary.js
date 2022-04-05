/*
Ternary Operator

klausimas? teigiama : neigiama

*/

const arLyja = true;

const sketis = arLyja ? 'pasiimk' : 'nereikia';          // pasiimk /nereikia
console.log(sketis);

const s1 = 4 > 2 ? 'daugiau' : 'nedaugiau';
console.log(s1);


let s2 = '';
if (4 < 2) {
    s2 = 'daugiau';
} else {
    s2 = 'nedaugiau';
}
console.log(s2)

/*
Nestintas ternary
*/

const color = 'blue';
const x1 = color === 'blue' ? 'Melyna' : 'Nezinoma spalva';
console.log(x1);

const spalva = 'red';
const x2 = spalva === 'blue' ? 'Melyna' : spalva === 'red' ? 'raudona' : 'Nezinoma spalva';
console.log(x2);

const color = 'blue';
const light = true;
const x3 = color === 'blue'
              ? light
                ? 'Sviesiai melyna'
                : 'Tamsiai melyna'
              : color === 'red'
                ? 'Raudona'
                : 'Nezinoma spalva';
console.log(x3);