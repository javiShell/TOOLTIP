const db = require('../models');


async function findByUsername(username) {
    if(!username) throw new Error('Nombre de usuario no dado');
    return await db.users.findOne({
        where: {
            username: username
        }
    });
}

module.exports = {
    findByUsername
}