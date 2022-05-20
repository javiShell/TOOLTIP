
const express = require('express'),
router = express.Router(),
{ _create, _findByUsername } = require('../controllers/users'),
{ _createArticulo, _findByArticuloName, _findArticulos,_findArticulosCategoria, _findArticulosCategoriasOrdenadores, _findArticulosCategoriasMoviles } = require('../controllers/articulos'),
{_findCategorias} = require('../controllers/categorias'),
{_findCategoriasMoviles} = require('../controllers/categoriasMoviles'),
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
        var result = [];
        console.log(req.body)
        const foundArticulos = await _findArticulosCategoria(req.body);
        var json = JSON.stringify(foundArticulos);
        var articulos = JSON.parse(json);
        for(i in articulos){
            result[i] = articulos[i];
        }
        if(foundArticulos){
            return  res.status(201).json(result);
        }
       
    } catch (e) {
        return res.status(500).json(e.status + e.message);
    }
})


router.get('/getCategorias', async (req, res) => {
    try {
        var result = [];
        console.log(req.body)
        const foundCtegorias = await _findCategorias();
        var json = JSON.stringify(foundCtegorias);
        var categorias = JSON.parse(json);
        for(i in categorias){
            result[i] = categorias[i];
        }
        if(foundCtegorias){
            return  res.status(201).json(result);
        }
       
    } catch (e) {
        return res.status(500).json(e.status + e.message);
    }
})

router.get('/getCategorias2', async (req, res) => {
    try {
        var result = [];
        console.log(req.body)
        const foundCtegorias = await _findCategoriasMoviles();
        var json = JSON.stringify(foundCtegorias);
        var categorias = JSON.parse(json);
        for(i in categorias){
            result[i] = categorias[i];
        }
        if(foundCtegorias){
            return  res.status(201).json(result);
        }
       
    } catch (e) {
        return res.status(500).json(e.status + e.message);
    }
})

router.post('/getProductosCategorias', async (req, res) => {
    try {
        var result = [];
        const foundArticulos = await _findArticulosCategoriasOrdenadores(req.body);
        var json = JSON.stringify(foundArticulos);
        var articulos = JSON.parse(json);
        for(i in articulos){
            result[i] = articulos[i];
        }
        if(foundArticulos){
            return  res.status(201).json(result);
        }
       
    } catch (e) {
        return res.status(500).json(e.status + e.message);
    }
})

router.post('/getProductosCategoriasMoviles', async (req, res) => {
    try {
        var result = [];
        const foundArticulos = await _findArticulosCategoriasMoviles(req.body);
        var json = JSON.stringify(foundArticulos);
        var articulos = JSON.parse(json);
        for(i in articulos){
            result[i] = articulos[i];
        }
        if(foundArticulos){
            return  res.status(201).json(result);
        }
       
    } catch (e) {
        return res.status(500).json(e.status + e.message);
    }
})


module.exports = router;