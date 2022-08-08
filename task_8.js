/* 
Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

Используйте шаблонные строки.
*/

let myMap = new Map();// Создаем массив
myMap.set('key_1', 'value_1');
myMap.set('key_2', 'value_2');
myMap.set('key_3', 'value_3');
myMap.set('key_4', 'value_4');

for (let name of myMap.keys()) {
    console.log(`ключ - ${name} , значение - ${myMap.get(name)}`);// Выводим ключ значение
};