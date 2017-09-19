var sequelize = require('./../../dbconnection/mysql/connection');
var Sequelize = require('sequelize');
//Create Item Table Structure

var Usual = sequelize.define('Usual', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    keyword: Sequelize.STRING,
    sec_keyword: {type: Sequelize.STRING, defaultValue: '#'},
    answer: Sequelize.STRING
});

// force: true will drop the table if it already exists
Usual.sync({force: false}).then(() => {
});

module.exports = Usual;
