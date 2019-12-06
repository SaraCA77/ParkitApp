const Hash = require('../utils/hash');
const Validator = require('../utils/validator');

module.exports = (sequelize, DataTypes) => sequelize.define('usuarios', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'nombre es requerido'
            },
            len: {
                args: [5, 100],
                msg: "nombre debe tener minimo 3 y máximo 100 caracteres"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("nombre no debe estar vacío");
                }
            },
        }
    },
    apellidos: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'apellidos es requerido'
            },
            len: {
                args: [5, 100],
                msg: "apellidos debe tener minimo 3 y máximo 100 caracteres"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("apellidos no debe estar vacío");
                }
            },
        }
    },
    tipoDocumento: {
        type: DataTypes.STRING(30),
        allowNull: true,
    },
    noDocumento: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'N.documento es requerido'
            },
            len: {
                args: [5, 30],
                msg: "N.documento debe tener minimo 5 y máximo 12 caracteres"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("N.documento no debe estar vacío");
                }
            },
        }
    },
    celular: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Celular es requerido'
            },
            len: {
                args: [5, 30],
                msg: "Celular debe tener minimo 5 y máximo 12 caracteres"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("Celular no debe estar vacío");
                }
            },
        }
    },
    correo: {
        type: DataTypes.STRING(250),
        allowNull: false,
        validate: {
            isEmail: {
                args: true,
                msg: "correo electrónico no es válido"
            },
            notNull: {
                msg: 'correo electrónico es requerido'
            },
            len: {
                args: [5, 250],
                msg: "correo electrónico debe tener minimo 5 y máximo 250 caracteres"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("correo electrónico no debe estar vacío");
                }
            },
            /*
            isUnique: function(correo, next) {
                const self = this;
                return Validator.isUnique('../models/registrouser.js', self, next, { correo }, 'correo electrónico está asociado a otro usuario');
            }
            */
        }
    },
    clave: {
        type: DataTypes.STRING(12),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'contraseña es requerida'
            },
            len: {
                args: [6, 12],
                msg: "contraseña debe tener minimo 6 y máximo 12 caracteres"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("contraseña no debe estar vacía");
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
    }
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