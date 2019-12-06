const Controller = require('./controller');
const Service = require('../services/registrouser');

class RegistroUserController extends Controller {

    constructor() {
        super(Service);
    }
}

module.exports = RegistroUserController;