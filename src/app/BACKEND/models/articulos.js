const Sequelize = require("sequelize-oracle");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('articulos', {
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
        descripcion: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false,
            len: [6, 20]
        },
        categoria: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false
        }, categoriasOrdenador:{
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false
          },
        img: {
            type: Sequelize.STRING,
            required: false
        }
       

    },{
        underscored: true,
        paranoid: true,
        charset: 'utf8'
    })


}
