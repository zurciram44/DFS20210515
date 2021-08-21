//Elementos basicos para crear nuestro servidor

const http = require('http'); //Instancia a la clase que crear la base del protocolo http
const fecha = require('./Fecha');
const hostname = '127.0.0.1'; //hots de la aplicación 
const port = 3000;

//creacion del servidor en base al protocolo

const server = http.createServer(
    (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('La fecha actual es ' + fecha.regresarFecha());
        res.end(' Termino')
    }
);

//Enciendo el servidor y lo pongo a escuchar
server.listen(port, hostname, () => {
    console.log(`El servidor esta corriendo en http://${hostname}:${port}/`)
})