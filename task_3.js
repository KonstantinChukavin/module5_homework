/*
Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".
*/

function reverseString(str) {
    let arr
    arr = str.split("").reverse().join("");
    console.log(arr)
}
reverseString("Hello");