const readline = require('readline-sync'); //Instancia de la clase readline

function pedirNombre() { //cree una función de pedir nombre

    let nombre = readline.question('Cual es tu nombre '); //use la funcion question del objeto
    console.log('Hola ', nombre); //retorne algo


}

pedirNombre(); //llame la funcion que cree

exports.pedirNombre = pedirNombre;