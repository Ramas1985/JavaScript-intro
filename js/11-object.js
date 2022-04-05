
/*
objektas: 'key-value' poru rinkinys
*/

// const petras = {
//     name: 'Petras',
//     age: 99
// };
// console.log(petras);

// const ona = {
//     name: 'Ona',
//     age: 69
// };
// console.log(ona);

const petras = {
    name: 'Petras',
    age: 99
};

const ona = {
    name: 'Ona',
    age: 69
};

console.log(petras.age);
console.log(ona.age);
console.log(petras.name);
console.log(ona.name);

console.log('--------------------------')

const gyventojai = [petras, ona];
console.log(gyventojai[0]);
console.log(gyventojai[1].age);


const batas = {
    name: 'Adidas',
    color: 'red',
    pricing: [
        {
            country: 'LT',
            price: 99,
        },
        {
            country: 'LV',
            price: 88,
        },
        {
            country: 'EE',
            price: 120,
        },
    ]
}
console.log(batas.pricing[0]);
console.log(batas.pricing[1]);
console.log(batas.pricing[2]);


const kepure = {
    name: 'Skribeliukas',
    color: 'white',
    pricing: {
        lt: 99,
        lv: 88,
        ee: 120,
    }
}
console.log(kepure.pricing.lt);
console.log(kepure.pricing.lv);
console.log(kepure.pricing.ee);