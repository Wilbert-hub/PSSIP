// 2. Скрипт для отображения Фамилии и Имени p+5 раз
const p = 12; // Ваш номер варианта
const iterations = p + 5;
const lastName = "Молчун";
const firstName = "Никита";
let output = '';
for (let i = 0; i < iterations; i++) {
    output += `${lastName} ${firstName}<br>`;
}
document.getElementById('name-output').innerHTML = output;
