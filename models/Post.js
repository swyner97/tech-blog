// import important parts of the sequelize library
const { Sequelize, Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/config');

// Initialize Post model (table) by entending off Sequelize's Model class
class Post extends Model { }

// set up fields and rules for Post model
Post.init(
    {
        title: DataTypes.STRING,
        body: DataTypes.STRING
    },
    {
        sequelize
    }
);

module.exports = Post;