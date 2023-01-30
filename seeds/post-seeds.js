const { Post } = require('../models');

const postData = [
  {
    "id": "1",
    "name": "Why MVC is so important",
    "description": "Lorem Ipsum",
    "user_id": "1"
  },
  {
    "id": "2",
    "name": "Authentication VS Authorization",
    "description": "Lorem Ipsum",
    "user_id": "2"
  },
  {
    "id": "3",
    "name": "Object Relational Mapping",
    "description": "Lorem Ipsum",
    "user_id": "3"
  }
]

const seedProducts = () => Post.bulkCreate(postData);

module.exports = seedProducts;