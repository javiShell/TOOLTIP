const localStrategy = require('passport-local').Strategy,
{_findByUsername} = require('../controllers/users'),
bcrypt = require('bcrypt');


module.exports = new localStrategy({session: false}, async (username, password, done) => {
    try {
        const user = await _findByUsername(username);
        if(!user) return done(null,false, 'Usuario y/o contraseña incorrectos');
        const match = bcrypt.compareSync(password, user.password);
        if(!match) return done(null,false, 'Usuario y/o contraseña incorrectos');
        return done(null,  {
            username: user.username,
            id: user.id
        })
    } catch (e) {
        done(e);
    }
})