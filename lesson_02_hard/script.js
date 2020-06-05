'use strict';

let num = 266219;
num = num.toString().split('');
let result = num.reduce((total, sum) =>  {
    return total *= sum;
});

console.log(result);

result **= 3;
console.log("Результат возведения в степень 3: ", result);

console.log("Вывести на экран первые 2 цифры полученного числа: ", String(result).slice(0, 2));