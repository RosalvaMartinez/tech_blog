const { Comment } = require('../models');

const commentData = [
  {
    "id": "1",
    "name": "Why MVC is so important",
    "comment": "Lorem Ipsum"
  },
  {
    "id": "2",
    "name": "Authentication VS Authorization",
    "comment": "Lorem Ipsum"
  },
  {
    "id": "3",
    "name": "Object Relational Mapping",
    "comment": "Lorem Ipsum"
  }
]

const seedProducts = () => Comment.bulkCreate(commentData);

module.exports = seedProducts;