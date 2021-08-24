const fs = require('fs');

let salida = '';

const getMulti = async (id, listar, hasta) => {
    try {
        for (let i = 1; i <= hasta; i++) {
            if (listar) {
                console.log(`${id} x ${i} = ${i * id}`);
            }
            salida += `${id} x ${i} = ${i * id} \n`;
        }
    } catch (err) {

    }
}

//Forma 1
/*const crearArchivo = (base = 5) => {
    return new Promise((resolve, reject) => {
        getMulti(base);
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        resolve(`archivo ${base}`);
    });
}*/

const crearArchivo = async (base = 5, listar = false, hasta) => {
    try {
        getMulti(base, listar, hasta);
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return (`archivo ${base}`);
    } catch (err) {

    }
}

module.exports = {
    crearArchivo
}