// import important parts of the sequelize library
const { Model, Datatypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Comment model (table) by entending off Sequelize's Model class
class Comment extends Model { }

// set up fields and rules for Comment model
Comment.init(
    {
        id: {
            type: Datatypes.INTEGRER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment: {
            type: Datatypes.STRING,
            allowNull: false
        },
        post_id: {
            type: Datatypes.INTEGRER,
            references: {
                model: 'post',
                key: 'id'
            },
        },
        user_id: {
            type: Datatypes.INTEGRER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product_tag',
    }
);

module.exports = Comment;