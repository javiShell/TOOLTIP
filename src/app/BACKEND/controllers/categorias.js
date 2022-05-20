const {findCategorias} = require('../services/findCategorias');




async function _findCategorias(){
    return findCategorias();
}

module.exports = {
    _findCategorias
}