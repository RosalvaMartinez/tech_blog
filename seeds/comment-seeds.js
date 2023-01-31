const { Comment } = require('../models');

const commentData = [
  {
    "id": "1",
    "name": "Why MVC is so important",
    "comment": "Lorem Ipsum",
    "post_id" : "1",
    "user_id" : "1"
  },
  {
    "id": "2",
    "name": "Authentication VS Authorization",
    "comment": "Lorem Ipsum",
    "post_id" : "2",
    "user_id" : "2"
  },
  {
    "id": "3",
    "name": "Object Relational Mapping",
    "comment": "Lorem Ipsum",
    "post_id" : "3",
    "user_id" : "3"
  }
]

const seedProducts = () => Comment.bulkCreate(commentData);

module.exports = seedProducts;