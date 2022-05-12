const { create} = require('../services/createArticulo');
const { findByArticuloName } = require('../services/findArticulo');
const { findArticulos } = require('../services/findArticulo');
const {findArticulosCategoria} = require('../services/findArticulo');



async function _createArticulo(articulo){
    return await create(articulo);
}

async function _findByArticuloName(nombre){
    return findByArticuloName(nombre);
}

async function _findArticulos(categoria){
    return findArticulos(categoria);
}

async function _findArticulosCategoria(categoria){
    return findArticulosCategoria(categoria);
}

module.exports = {
    _createArticulo,
    _findByArticuloName,
    _findArticulos,
    _findArticulosCategoria
}