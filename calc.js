const operations = require('./operations.js');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`
Calc.js

Вы открыли калькулятор на Node.js!
Версия: 1.0.0.

Использование: пользователь должен ввести два числа, а затем 
выбрать, что с ними сделать.
`);

rl.close();