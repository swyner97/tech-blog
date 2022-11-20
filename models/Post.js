// import important parts of the sequelize library
const { Model, Datatypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Post model (table) by entending off Sequelize's Model class
class Post extends Model { }

// set up fields and rules for Post model
Post.init(
    {
        id: {
            type: Datatypes.INTEGRER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        post: {
            type: Datatypes.STRING,
            allowNull: false
        },
        user_id: {
            type: Datatypes.INTEGRER,
            references: {
                model: 'user',
                key: 'id'
            },
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

module.exports = Post;