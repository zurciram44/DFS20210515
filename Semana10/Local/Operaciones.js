const readline = require('readline-sync');
const Operaciones = {}


var num1;
var num2;
var resultado;

function suma(num1, num2) {
    num1 = readline.question('Dame un primer numero ');
    num2 = readline.question('Dame otro numero ');
    resultado = parseFloat(num1) + parseFloat(num2);
    console.log('El resultado es ', resultado)
}

function resta(num1, num2) {
    num1 = readline.question('Dame un primer numero ');
    num2 = readline.question('Dame otro numero ');
    resultado = parseFloat(num1) - parseFloat(num2);
    console.log('El resultado es ', resultado)
}

function multiplicacion(num1, num2) {
    num1 = readline.question('Dame un primer numero ');
    num2 = readline.question('Dame otro numero ');
    resultado = parseFloat(num1) * parseFloat(num2);
    console.log('El resultado es ', resultado)
}

function division(num1, num2) {
    num1 = readline.question('Dame un primer numero ');
    num2 = readline.question('Dame otro numero ');
    resultado = parseFloat(num1) / parseFloat(num2);
    console.log('El resultado es ', resultado)
}

module.exports = Operaciones;
Operaciones.suma = suma;
Operaciones.resta = resta;
Operaciones.multiplicacion = multiplicacion;
Operaciones.division = division;