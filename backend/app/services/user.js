/**
 * Servicio que implementa la funcionalidad del modelo usuarios
 * @author jaimecastrillon@gmail.com
 */

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const Hash = require('../utils/hash');

const Database = require('../../app/database');
const Model = Database.import('../models/user');
const Service = require('./service');

const Response = require('../routing/response');
const Messages = require('../utils/messages');
const Logger = require('../utils/logger')();

class usuariosService extends Service {

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["usuarios", "clave"]
            },
            one: {
                attributes: ["usuarios", "clave"]
            },
            all: {
                attributes: ["usuarios", "clave"]
            },
        };
        console.log(modelOptions, "Model: ", Model);

        super(Model, modelOptions);
    }

    async login(usuarios, clave) {
        try {
            const usuarios = await this.model.scope('withPassword').findOne({
                where: {
                    [Op.or]: [{ usuario: usuarios }, { clave: clave }]
                }
            });

            if (usuarios && clave) {
                if (usuarios.active) {
                    const isValid = await Hash.validateHash(clave, usuarios.clave);
                    if (isValid) {
                        const usuariosData = {
                            usuario: usuarios.usuarios,
                            clave: usuarios.clave,
                            rol: usuarios.rol,
                            estado: usuarios.estado
                        };
                        return Response.success(usuariosData);
                    } else {
                        await Promise.reject(Response.error(Messages('LOGIN_NOT_EXIST'), 404));
                    }
                } else {
                    await Promise.reject(Response.error(Messages('LOGIN_INACTIVE'), 403));
                }
            } else {
                await Promise.reject(Response.error(Messages('LOGIN_NOT_EXIST'), 404));
            }
        } catch (error) {
            Logger.error(`[action: login][msg: ${JSON.stringify(error)}][line:${__line}:${__filename}]`);
            await Promise.reject(Response.error(error.error || Messages('LOGIN_ERROR'), error.status || 500));

        }
    }

}

module.exports = usuariosService;