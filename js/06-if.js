/*
IF - salygos sakinys

Operatoriai:
visi: <, >, <=, >=, ==(== tikrina tik reiksmes), !=, ===(=== tikrina tipa (tekstas ar skaicius)), !==   
nenaudotini: ==, !=,
naudotini: <, >, <=, >=, ===, !==

Sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} ... else if () {}
if () {} else if () {} ... else if () {} else {}
*/


if (4 > 2) {
    console.log('taip');
} else {
    console.log('ne');
}

if (4 == 2) {
    console.log('taip');
} else {
    console.log('ne');
}

if (4 != 2) {
    console.log('taip');
} else {
    console.log('ne');
}

if (4 === 2) {
    console.log('taip');
} else {
    console.log('ne');
}

console.log('--------------------------');


// const akys = 'melynos';
// if (akys === 'melynos') {
//     console.log('Melynakis');
// }

// const akys = 'zalios';
// if (akys === 'melynos') {
//     console.log('Melynakis');
// } else if (akys === 'zalios') {
//     console.log('zaliaakis');
// }

const akys = 'zydros`';
if (akys === 'melynos') {
    console.log('Melynakis');
} else if (akys === 'zalios') {
    console.log('zaliaakis');
} else if (akys === 'rudos') {
    console.log('rudaakis');
} else {
    console.log('neatpazinta akiu spalva');
}

console.log('-------------------');

// const parosMetas = 'diena';

// if (parosMetas === 'rytas') {
//     console.log('Labas rytas');
// } else {
//     console.log('Neatpazintas paros metas');
// }

const parosMetas = 'vakaras';
const arLyja = true;

if (parosMetas === 'rytas') {
    if (arLyja) {
        console.log('Labas rytas, nepamirsk skecio');
    } else {
        console.log('Labas rytas');
    }
} else {
    if (parosMetas === 'diena') {
        if (arLyja) {
            console.log('Laba diena, nepamirsk skecio');
        } else {
            console.log('Laba diena');
        }
    } else {
        if (parosMetas === 'vakaras') {
            if (arLyja) {
                console.log('Labas vakaras, nepamirsk skecio');
            } else {
                console.log('Labas vakaras');
            }
        } else {
            console.log('Neatpazintas paros metas');
        }
    }
}


// Loginiai operatoriai- || (arba- or);  && (ir- and)

const day = 4;

if (day === 1 || day === 2 || day === 3 || day === 4 || day === 5 ) {
    console.log('Darbo diena');
} else if (day === 6 || day === 7) {
    console.log('Savaitgalis');
} else {
    console.log('Nezinoma diena');
}

if (day >= 0 && day < 6) {
    console.log('Darbo diena');
} else if (day >= 6 && day < 7) {
    console.log('Savaitgalis');
} else {
    console.log('Nezinoma diena');
}
