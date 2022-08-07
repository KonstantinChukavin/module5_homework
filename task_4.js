/*
Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.
*/

const n = 0;                       // задаем значения диапазона
const m = 100;

let range = Math.abs(m - n);
let numberInRange = Math.round(Math.random() * range);
let min = Math.min(n, m);
let randomNumber = (min + numberInRange);  // это случайная переменная в заданном диапазоне

console.log(randomNumber);                 // проверяем через консоль