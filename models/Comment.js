// import important parts of the sequelize library
const { Sequelize, Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/config');

// Initialize Comment model (table) by entending off Sequelize's Model class
class Comment extends Model { }

// set up fields and rules for Comment model
Comment.init(
    {
        body: {
            type: Datatypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize
    }
);

module.exports = Comment;