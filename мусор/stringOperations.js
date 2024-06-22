// 5. Работа со строками STRING
const S1 = "Молчун";
const S2 = "Гродно, Беларусь";

const S2Length = S2.length;
const S1Reversed = S1.split('').reverse().join('');
const S2LowerCase = S2.toLowerCase();

document.getElementById('string-output').innerHTML = `
    Длина строки S2: ${S2Length}<br>
    Строка S1 в обратном порядке: ${S1Reversed}<br>
    Строка S2 в нижнем регистре: ${S2LowerCase}
`;
