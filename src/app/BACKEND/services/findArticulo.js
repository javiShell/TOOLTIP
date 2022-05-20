const db = require('../models');


async function findByArticuloName(nombre) {
    if (!nombre) throw new Error('Nombre del artículoo no dado');
    return await db.articulos.find({
        where: {
            nombre: nombre
        }
    });
}

async function findArticulosCategoriasOrdenadores(categoria) {
    var categoriasOrdenadores  = JSON.stringify(categoria[0].categoriasOrdenadores)
    if (!categoriasOrdenadores ) throw new Error('Categoria del artículo no dada');
    var ids = await db.categorias.findAll({ where: {nombre: categoria[0].categoriasOrdenadores} });
    return await db.articulos.findAll({ where: { categoriasOrdenador: ids[0].id,
                                                 categoria: 1    } });
}

async function findArticulosCategoriasMoviles(categoria) {
    var categoriasOrdenadores  = JSON.stringify(categoria[0].categoriasOrdenadores)
    if (!categoriasOrdenadores ) throw new Error('Categoria del artículo no dada');
    var ids = await db.categoriasMoviles.findAll({ where: {nombre: categoria[0].categoriasOrdenadores} });
    return await db.articulos.findAll({ where: { categoriasOrdenador: ids[0].id,
                                                 categoria: 2    } });
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
    findArticulosCategoria,
    findArticulosCategoriasOrdenadores,
    findArticulosCategoriasMoviles
}