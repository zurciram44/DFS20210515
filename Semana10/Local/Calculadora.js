const nombre = require('./Nombre');
const readline = require('readline-sync');
const operaciones = require('./Operaciones');
nombre.pedirNombre;
console.log('Esta es una calculadora, puedes hacer lo siguiente ')
console.log('Suma = a');
console.log('Resta = b');
console.log('Multiplicación = c');
console.log('División = d');

var opcion = readline.question('Que quieres hacer ');

if (opcion == 'a') {
    operaciones.suma();
} else
if (opcion == 'b') {
    operaciones.resta();
} else
if (opcion == 'c') {
    operaciones.multiplicacion();
} else
if (opcion == 'd') {
    operaciones.division();
}