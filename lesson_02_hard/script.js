'use strict';

let num = 266219;
num = num.toString().split('');
let result = num.reduce((total, sum) =>  {
    return total *= sum;
});

console.log(result);
console.log("result:", typeof result);