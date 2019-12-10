const Database = require('../../app/database');
const Model = Database.import('../models/registrouser');
const Service = require('./service');


class registrouserService extends Service {


    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id", "nombre", "apellidos", "tipo_documento", "no_documento", "celular", "correo", "clave", "rol", "estado"]
            },
            one: {
                attributes: ["id", "nombre", "apellidos", "tipo_documento", "no_documento", "celular", "correo", "clave", "rol", "estado"]
            },
            all: {
                attributes: ["id", "nombre", "apellidos", "tipo_documento", "no_documento", "celular", "correo", "clave", "rol", "estado"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = registrouserService;