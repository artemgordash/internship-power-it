/* 
Создайте массив из n чисел и выводите его в консоль 5 разными способами:
for, while, do … while
for in
for of
forEach
map
В конце кода, пишите в комментарии свое мнение какой из способов лучше. Найдите еще один способ вывода массива.
*/

const numbers = [1, 2, 3, 4, 5];

/* for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
 */

/* let i = 0;
while (i < numbers.length) {
    console.log(numbers[i])
    i++
} */

/* let i = 0;
do {
    console.log(numbers[i]);
    i++
} while (i < numbers.length) */

/* for (el in numbers) {
    console.log(numbers[el])
} */

/* for (el of numbers) {
    console.log(el)
} */

/* numbers.forEach((el) => console.log(el)) */

/* numbers.map((el) => console.log(el)) */

/* numbers.reduce((current, next) => current + next,  0) */