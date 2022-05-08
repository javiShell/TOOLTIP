const db = require('../models');


async function findByArticuloName(nombre) {
    if(!nombre) throw new Error('Nombre del artículoo no dado');
    return await db.articulos.findOne({
        where: {
            nombre: nombre
        }
    });
}

async function findArticulos(categoria) {
    return await db.articulos.findOne({
        where: {
            categoria: categoria
        }
    });
}

module.exports = {
    findByArticuloName,
    findArticulos
}