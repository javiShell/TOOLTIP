const { create} = require('../services/create');
const { findByUsername} = require('../services/find');



async function _create(user){
    return await create(user);
}

async function _findByUsername(username){
    return findByUsername(username);
}


module.exports = {
    _create,
    _findByUsername
}