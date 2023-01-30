const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


// Comment belongsTo Post
Comment.belongsTo(Post, {foreignKey: 'post_id'});

// Post belongsTo User
Post.belongsTo(User, {foreignKey: 'user_id'});

// Post has many Comments
Post.hasMany(Comment);

// User has many Post
User.hasMany(Post);

module.exports = { User, Post, Comment };
