const { Post } = require('../models');

const postData = [
  {
    "id": "1",
    "name": "Why MVC is so important",
    "description": "Lorem Ipsum"
  },
  {
    "id": "2",
    "name": "Authentication VS Authorization",
    "description": "Lorem Ipsum"
  },
  {
    "id": "3",
    "name": "Object Relational Mapping",
    "description": "Lorem Ipsum"
  }
]

const seedProducts = () => Post.bulkCreate(postData);

module.exports = seedProducts;