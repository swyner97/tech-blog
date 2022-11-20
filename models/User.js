// import important parts of the sequelize library
const { Model, Datatypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/config');

// Initialize User model (table) by entending off Sequelize's Model class
class User extends Model { }

// set up fields and rules for User model
User.init(
    {
        id: {
            type: Datatypes.INTEGRER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Datatypes.STRING,
            allowNull: false
        },
        password: {
            type: Datatypes.password,
            allowNull: false
        },
        post_id: {
            type: Datatypes.INTEGRER,
            references: {
                model: 'post',
                key: 'id'
            }
        },
        comment_id: {
            type: Datatypes.INTEGRER,
            references: {
                model: 'comment',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product_tag',
    }
);

module.exports = User;