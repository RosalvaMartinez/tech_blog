const { User } = require('../models');

const userData = [
  {
    "id": "1",
    "name": "Goose",
    "email": "goose@gmail.com",
    "password": "password12345"
  },
  {
    "id": "2",
    "name": "Ducki",
    "email": "ducki@gmail.com",
    "password": "password12345"
  },
  {
    "id": "3",
    "name": "Poyoteh",
    "email": "poyoteh@gmail.com.com",
    "password": "password12345"
  }
]

const seedProducts = () => User.bulkCreate(userData);

module.exports = seedProducts;
