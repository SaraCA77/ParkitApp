const Controller = require('./controller');
const Service = require('../services/registropark');

class RegistroParkController extends Controller {

    constructor() {
        super(Service);
    }
}

module.exports = RegistroParkController;