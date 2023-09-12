const fs = require('fs')
const colors = require('colors');
//-------     CON ASYNC

// const crearArchivo = async ( base = 5) =>  {

//     try {
//         console.log('===================');
//         console.log('    Tabla del:', base );
//         console.log('===================');
    
//         let salida= '';
//         for(let i = 1; i <= 10; i++) {
//             salida +=  `${base} x ${i} = ${base * i}\n`;
//         }
//         console.log(salida);
//         fs.writeFileSync(`tabla-${base}.txt`, salida );
        
//         return `Tabla-${base}.txt`
//     } catch (error) {
//         throw error
//     }
// }



//--------    CON PROMISE
const crearArchivo = ( base = 5, listar, hasta) =>  {
    
    return new Promise( (res, rej) => {

        let salida = '';
        let consola = '';
        for(let i = 1; i <= hasta; i++) {
            salida +=  `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.gray} ${i} ${'='.grey} ${colors.green(base * i)}\n`;
        }

        if( listar ){
            console.log('==================='.green);
            console.log('    Tabla del:', base );
            console.log('==================='.green);
            console.log(consola);      
        } 
        
        ( !fs.writeFileSync(`./salida/tabla-${base}.txt`, salida ) )
            ? res( `Tabla-${base}.txt`.bold )
            : rej('Ocurrió un error al guardar el archivo');

    } )
}




module.exports = {
    crearArchivo
}