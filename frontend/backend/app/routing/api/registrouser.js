const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/registrouser');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/registrouser', routing.all)
    .get('/registrouser/:id', routing.one)
    .post('/registrouser', routing.create)
    .post('/registrouser/login', routing.login)
    .put('/registrouser/:id', routing.update)
    .delete('/registrouser/:id', routing.destroy);

module.exports = router;