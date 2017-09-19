var sequelize = require('./../../dbconnection/mysql/connection');
var Sequelize = require('sequelize');
//Create Item Table Structure

var Exactly = sequelize.define('Exactly', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    keyword: Sequelize.STRING,
    sec_keyword: {type: Sequelize.STRING, defaultValue: '#'},
    answer: Sequelize.STRING
});

// force: true will drop the table if it already exists
Exactly.sync({force: false}).then(() => {
});

module.exports = Exactly;
