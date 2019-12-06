const Database = require('../../app/database');
const Model = Database.import('../models/registrouser');
const Service = require('./service');


class registrouserService extends Service {


    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id", "nombre", " apellidos ", " tipoDocumento ", "noDocumento", "celular", "correo", "clave", "rol", "estado"]
            },
            one: {
                attributes: ["id", "nombre", " apellidos ", " tipoDocumento ", "noDocumento", "celular", "correo", "clave", "rol", "estado"]
            },
            all: {
                attributes: ["id", "nombre", " apellidos ", " tipoDocumento ", "noDocumento", "celular", "correo", "clave", "rol", "estado"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = registrouserService;