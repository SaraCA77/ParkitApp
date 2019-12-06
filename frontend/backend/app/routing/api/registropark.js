const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/registropark');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/registropark', Auth.isAuth, routing.all)
    .get('/registropark/:id', Auth.isAuth, routing.one)
    .post('/registropark', Auth.isAuth, routing.create)
    .post('/registropark/login', routing.login)
    .put('/registropark/:id', Auth.isAuth, routing.update)
    .delete('/registropark/:id', Auth.isAuth, routing.destroy);

module.exports = router;