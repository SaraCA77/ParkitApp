/**
 * Modelo de la tabla users
 * @author jaimecastrillon@gmail.com
 */

const Hash = require('../utils/hash');
const Validator = require('../utils/validator');

module.exports = (sequelize, DataTypes) => sequelize.define('usuarios_app', {
    usuarios: {
        type: DataTypes.STRING(250),
        allowNull: false,
        validate: {
            isEmail: {
                args: true,
                msg: "correo electrónico no es válido"
            },
            notNull: {
                msg: 'El usuario es requerido'
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("El usuario no debe estar vacío");
                }
            }
        }
    },
    access: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'clave es requerida'
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("clave no debe estar vacía");
                }
            },
        }
    },
    rol: {
        type: DataTypes.STRING(2),
        allowNull: true,
    },
    estado: {
        type: DataTypes.STRING(10),
        allowNull: true,
    },
}, {
    underscored: true,
    timestamps: false,
    freezeTableName: true,
    defaultScope: {
        attributes: { exclude: ['access'] },
    },
    scopes: {
        withPassword: {
            attributes: { include: ['access'], exclude: ['createdAt', 'updatedAt', 'token'] },
        }
    },
    hooks: {
        beforeCreate: (user, options) => {
            return Hash.createHash(user.access).then(encrypted => {
                user.access = encrypted;
            });
        }
    }
});