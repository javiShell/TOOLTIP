const db = require('../models');
const bcrypt = require('bcrypt');

async function create(user){
    if(!user.nombre) throw new Error('Nombre de usuario no dado...');
    if(!user.password) throw new Error('Contraseña de usuario no dada...');
    if(!user.apellidos) throw new Error('apellidos de usuario no dado...');
    if(!user.email) throw new Error('email de usuario no dado...');
    if(!user.username) throw new Error('NombreUser de usuario no dado...');
    if(!user.password) throw new Error('Contraseña de usuario no dada...');
    console.log(user)
    return await db.users.create({
        ...user,
        password: bcrypt.hashSync(user.password,10)
    });

}

module.exports =  {
    create
}