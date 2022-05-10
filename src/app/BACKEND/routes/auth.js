
const express = require('express'),
router = express.Router(),
{ _create, _findByUsername } = require('../controllers/users'),
{ _createArticulo, _findByArticuloName, _findArticulos } = require('../controllers/articulos'),
passport = require('passport'),
jwt = require('jsonwebtoken');


router.post('/signin', async(req, res, next) => {
    passport.authenticate('local', {session: false}, function(err, user, info){
        console.log(err,user,info)
        if(err) return res.status(500).json(err);
        if(!user) return res.status(400).json(info);
        const token = jwt.sign(user, 'texto', {expiresIn: '1h'});
        return res.status(200).json({
            token, expiresIn: 3600, user
        })
    })(req, res, next)
});

router.post('/signup', async(req, res) => {
    try {
        const foundUser = await _findByUsername(req.body.username);
        if(foundUser){
            return res.status(400).json(`El usuario ${foundUser.username} ya existe`);
        }
       const user = await _create(req.body);
       
       return res.status(201).json({
           status: 'success',
           message: `El usuario ${user.username} fue creado correctamente`
       })
    } catch (e) {
        return res.status(500).json(e.status + e.message);
    }
});

router.post('/insertArticulos', async(req, res) => {
    try {
        const foundArticulo = await _findByArticuloName(req.body.nombre);
        if(foundArticulo){
            return res.status(400).json(`El artículo ${foundArticulo.nombre} ya existe`);
        }
       const articulo = await _createArticulo(req.body);
       
       return res.status(201).json({
           status: 'success',
           message: `El artículo ${articulo.nombre} fue creado correctamente`
       })
    } catch (e) {
        return res.status(500).json(e.status + e.message);
    }
});

router.post('/getProductos', async (req, res) => {
    try {
        const foundArticulo = await _findArticulos(req.body.categoria);
        console.log(foundArticulo)
        if(foundArticulo){
            return  res.status(201).json(`El artículo ${foundArticulo.nombre} ya existe`);;
        }
       
    } catch (e) {
        return res.status(500).json(e.status + e.message);
    }
})


module.exports = router;