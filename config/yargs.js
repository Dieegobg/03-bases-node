const argv = require('yargs')
    .options('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la multiplicación'
    })
    .options('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Mostrar en consola la tabla'
    })
    .options('h', {
        alias: 'hasta',
        type: 'number',        
        default: 10,
        describe: 'Hasta donde llega la tabla'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw ('la base tiene que se un numero');
        }
        return true;

    })
    .argv;


module.exports = argv;