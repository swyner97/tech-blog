// import models 

const User = require('./User')
const Post = require('./Post')
const Comment = require('./Comment')

// User hasMany Post
User.hasMany(Post, {
    foreignKey: 'post_id'
});

// User hasMany Comment
User.hasMany(Comment, {
    foreignKey: 'comment_id'
});

// Post hasMany Comment
Post.hasMany(Comment, {
    foreignKey: 'comment_id',
    onDelete: 'CASCADE'
});

// Comment belongsTo Post
Comment.belongsTo(Post, {
    through: User, 
    foreignKey: 'comment_id'
});

module.exports = {
    User, Post, Comment
}

