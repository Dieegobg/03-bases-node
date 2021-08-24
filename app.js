console.clear();
const fs = require('fs');
const { number } = require('yargs');
const argv = require('./config/yargs');
const colors = require('colors');

const { crearArchivo } = require('./helpers/multiplicar');

//const [, , arg3 = 'base=5'] = process.argv;
//const [, base = 5] = arg3.split('=');

console.log(argv);
console.log('base '.red.bold, argv.base);


crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, ' creado'))
    .catch(err => console.error(err));