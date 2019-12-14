/**
 * Implementación de la ruta: /api/v1.0/users
 * @author jaimecastrillon@gmail.com
 */

const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/user');
const Routing = require('../routing');
const routing = Routing(new Controller());
// const Auth = require('../../middlewares/auth');

router
    .get('/user', routing.login)
    .get('/user/:id', routing.one)
    .post('/user', routing.create)
    .post('/user/login', routing.login)
    .put('/user/:id', routing.update)
    .delete('/user/:id', routing.destroy);

module.exports = router;