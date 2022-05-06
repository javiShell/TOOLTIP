const Sequelize = require("sequelize-oracle");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('users', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false,
            len: [6, 20]
        },
        apellidos: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false,
            len: [6, 20]
        },
        email: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false,
            len: [6, 20]
        },
        username: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false,
            len: [6, 20]
        },
        password: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false,
            len: [8, 100]
        }

    }, {
        underscored: true,
        paranoid: true
    })
}