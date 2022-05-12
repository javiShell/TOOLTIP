const { callbackify } = require('util');
const db = require('../models');


async function findByArticuloName(nombre) {
    if (!nombre) throw new Error('Nombre del artículoo no dado');
    return await db.articulos.find({
        where: {
            nombre: nombre
        }
    });
}

async function findArticulosCategoria(categoria) {
    var categorias = JSON.stringify(categoria[0].categoria)
    if (!categorias) throw new Error('Categoria del artículo no dada');
    return await db.articulos.findAll({ where: { categoria: categorias } });
}

async function findArticulos() {
    return await db.articulos.findAll({});
}

module.exports = {
    findByArticuloName,
    findArticulos,
    findArticulosCategoria
}