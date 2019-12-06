/**
 * Servicio que implementa la funcionalidad del modelo User
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

class UserService extends Service {

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id", "usuarios", "clave", "rol", "estado"]
            },
            one: {
                attributes: ["id", "usuarios", "clave", "rol", "estado"]
            },
            all: {
                attributes: ["id", "usuarios", "clave", "rol", "estado"]
            },
        };
        super(Model, modelOptions);
    }

    async login(usuario, clave) {
        try {
            const user = await this.model.scope('withPassword').findOne({
                where: {
                    [Op.or]: [{ usuario: usuarios }, { clave: clave }]
                }
            });

            if (user && access) {
                if (user.active) {
                    const isValid = await Hash.validateHash(clave, user.clave);
                    if (isValid) {
                        const userData = {
                            usuario: user.usuarios,
                            clave: user.clave,
                            rol: user.rol,
                            estado: user.estado
                        };
                        return Response.success(userData);
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

module.exports = UserService;