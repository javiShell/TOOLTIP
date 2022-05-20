const {findCategoriasMoviles} = require('../services/findCategoriasMoviles');




async function _findCategoriasMoviles(){
    return findCategoriasMoviles();
}

module.exports = {
    _findCategoriasMoviles
}