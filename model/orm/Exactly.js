var sequelize = require('./../../dbconnection/mysql/connection');
var Sequelize = require('sequelize');
//Create Item Table Structure

var Exactly = sequelize.define('Exactly', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    question: Sequelize.STRING,
    answer: Sequelize.STRING
});

// force: true will drop the table if it already exists
Exactly.sync({force: false}).then(() => {
});

module.exports = Exactly;
