const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('superset', 'root', 'root@123', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
