const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        })
        .option( 'l', {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en consola'
        })
        .option( 'h', {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Es la cantidad de múltiplos a mostrar'
        })
        .check( (argv, options) => {
            if( isNaN( argv.b ) || isNaN( argv.h ) ) {
                throw 'b y h tienen que ser un número; h es opcional';
            } 
            return true;
        } )
        .argv; 

module.exports = argv;
