const db = require('../models');


async function findByUsername(username) {
    if(!username) throw new Error('Nombre de usuario no dado');
    return await db.user.findOne({
        where: {
            username: username
        }
    });
}

module.exports = {
    findByUsername
}