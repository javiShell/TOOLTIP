const db = require('../models');
const bcrypt = require('bcrypt');

async function create(user){
    if(!user.username) throw new Error('Nombre de usuario no dado...');
    if(!user.password) throw new Error('Contraseña de usuario no dada...');

    return await db.user.create({
        ...user,
        password: bcrypt.hashSync(user.password,10)
    });

}

module.exports =  {
    create
}