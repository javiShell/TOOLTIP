const db = require('../models');



async function findCategoriasMoviles() {
    return await db.categoriasMoviles.findAll({});
}

module.exports = {
    findCategoriasMoviles
}