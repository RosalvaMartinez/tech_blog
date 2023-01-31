const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');


// Comment belongsTo Post
Comment.belongsTo(Post, {foreignKey: 'post_id'});

//Comment belongsTo a User?
Comment.belongsTo(User, {foreignKey: 'user_id'})

// Post belongsTo User
Post.belongsTo(User, {foreignKey: 'user_id'});

// Post has many Comments
Post.hasMany(Comment);

// User has many Post
User.hasMany(Post);

//User has many comments?
User.hasMany(Comment)

module.exports = { User, Post, Comment };
