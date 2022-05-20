const Sequelize = require("sequelize-oracle");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('categorias', {
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
        }
    }, {
        underscored: true,
        paranoid: true,
        charset: 'utf8'
    })


}
