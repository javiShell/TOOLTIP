const db = require('../models');



async function findCategorias() {
    return await db.categorias.findAll({});
}

module.exports = {
    findCategorias
}