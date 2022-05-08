const db = require('../models');

async function create(articulo){
    if(!articulo.nombre) throw new Error('Nombre del artículo no dado...');
    if(!articulo.descripcion) throw new Error('Descripción del artículo no dada...');
    if(!articulo.categoria) throw new Error('Categoría del artículo no dada...');
    return await db.articulos.create({
        ...articulo,
    });

}

module.exports =  {
    create
}