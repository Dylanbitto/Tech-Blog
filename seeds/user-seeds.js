const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'Luffydaking',
    email: 'luffy0@gmail.com',
    password: 'password123'
  },
  {
    username: 'sanjidacook',
    email: 'sanji@gmail.com',
    password: 'password123'
  },
  {
    username: 'zoroda3',
    email: 'zoro@gmail.com',
    password: 'password123'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
