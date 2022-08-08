/*
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
*/


const arr = [8, 6, 10, 11, NaN, 111, null, 0, undefined, 'Василий', 'Сергей', 0, 100, 0];// Задаем массив
let zeroNumber = 0;//
let evenNumber = 0;// Задаем переменные
let oddNumber = 0;//
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {// считаем нули
        zeroNumber += 1;
    } else if (typeof (arr[i]) !== 'number' || typeof (arr[i]) === 'NaN') {// Ищем все, что не соответствует number
        console.log(`${arr[i]} -  это не число`);
    } else if (isNaN(arr[i]) === true) {// Так как NaN это number, вычисляем его!! 
        console.log(`${arr[i]} -  это не число`);
    } else if (arr[i] % 2 === 0) {// считаем четные числа
        evenNumber += 1;
    } else {// считаем соответственно нечетные числа
        oddNumber += 1;
    }
}
console.log(`${zeroNumber} - нулей`);
console.log(`${evenNumber} - чётных чисел`);
console.log(`${oddNumber} - нечётных чисел`);