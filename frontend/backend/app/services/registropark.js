const Database = require('../../app/database');
const Model = Database.import('../models/registropark');
const Service = require('./service');


class registroparkService extends Service {


    constructor() {
        const modelOptions = {
            create: {
                attributes: [" id ", " nombre_parqueadero ", " direccion ", " cupo_total ", " cupo_bicicletas ", " cupo_vehiculos ", " cupo_motos ", " representante_legal ", " tipo_documento ", " no_documento ", " correo ", " clave ", " documentos ", " aprobado ", " observaciones ", " rol ", " foto ", " horario ", " abre ", " cierra ", " estado "]
            },
            one: {
                attributes: [" id ", " nombre_parqueadero ", " direccion ", " cupo_total ", " cupo_bicicletas ", " cupo_vehiculos ", " cupo_motos ", " representante_legal ", " tipo_documento ", " no_documento ", " correo ", " clave ", " documentos ", " aprobado ", " observaciones ", " rol ", " foto ", " horario ", " abre ", " cierra ", " estado "]
            },
            all: {
                attributes: [" id ", " nombre_parqueadero ", " direccion ", " cupo_total ", " cupo_bicicletas ", " cupo_vehiculos ", " cupo_motos ", " representante_legal ", " tipo_documento ", " no_documento ", " correo ", " clave ", " documentos ", " aprobado ", " observaciones ", " rol ", " foto ", " horario ", " abre ", " cierra ", " estado "]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = registroparkService;