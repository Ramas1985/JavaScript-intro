/*
Strings (tekstas)

inicijavimo budai:
- viengubos (') kabutes
- dvigubos (") kabutes
- backtick (`) kabutes
*/

const kabutes1 = 'Labas';
console.log(kabutes1)

const kabutes2 = "rytas";
console.log(kabutes2);

//  Viengubos (') kabutes.
const kabutes21 = "Viengubos (') kabutes.";
console.log(kabutes21);

// Dvigubos (") kabutes.
const kabutes12 = 'Dvigubos (") kabutes.';
console.log(kabutes12);

//  Viengubos (') ir Dvigubos (") kabutes.
const kabutes1a = "Viengubos (') ir dvigubos (\") kabutes.";
console.log(kabutes1a);

const kabutes2a = 'Viengubos (") ir dvigubos (\') kabutes.';
console.log(kabutes2a);

const backslash = 'tekste \\ yra';
console.log(backslash);

const backslash2 = 'tekste \\\' yra';
console.log(backslash2);

const vardas = 'Vardenis';
const pavarde = 'Pavardenis';

// Vardenis Pavardenis
const fullName = vardas + ' ' + pavarde;
console.log(fullName);

// Sveiki, as esu Pavardenis!
const sayHi = 'Sveiki, as esu ' + vardas + '!';
console.log(sayHi);

// \n- enter
// \t- tab
const imgSrc = './img/logo.png';
const HTML = '<header>\n\
<img src="' + imgSrc + '" alt="logo" class="logo">\n\
<nav>\n\
    <a href="#">Link</a>\n\
    <a href="#">Link</a>\n\
    <a href="#">Link</a>\n\
    <a href="#">Link</a>\n\
</nav>\n\
</header>';
console.log(HTML);

// backtick- ikelti teksta ${} (tik tada)
const H2 =`<header>
<img src="${imgSrc}" alt="logo" class="logo">
<nav>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
</nav>
</header>`;
console.log(H2);

const demo = `asd ${imgSrc} asd`;
console.log(demo);

