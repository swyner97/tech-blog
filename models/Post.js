// import important parts of the sequelize library
const { Model, Datatypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Post model (table) by entending off Sequelize's Model class
class Post extends Model {}

// set up fields and rules for Post model
Post.init( 
    {
        id: {
            type: Datatypes.INTEGRER, 
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true
        }, 
        Post: {
            type: Datatypes.STRING, 
            allowNull: false
        }
  
});

module.exports = Post;