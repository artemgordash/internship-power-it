/*
Напишите код который посчитает и выведет в консоль сумму четных чисел из интервала [a, b]
*/

const number = [1, 2, 3, 4, 5];

const getSumOfEvenNumbers = (array) => {
    let sum = 0;
    for (element of array) {
        if (element % 2 === 0) sum += element
    }
    return sum;
}