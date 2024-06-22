// 3. Скрипт для работы с массивом
let arr = [12, 5, 8, 130, 44, 9, 15];
let evenCount = 0;
let maxElement = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) evenCount++;
    if (arr[i] > maxElement) maxElement = arr[i];
}
document.getElementById('array-output').innerHTML = `
    Исходный массив: ${arr.join(', ')}<br>
    Количество четных элементов: ${evenCount}<br>
    Максимальный элемент: ${maxElement}
`;
