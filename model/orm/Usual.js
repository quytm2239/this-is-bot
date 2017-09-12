var sequelize = require('./../../dbconnection/mysql/connection');
var Sequelize = require('sequelize');
//Create Item Table Structure

var UsualQ = sequelize.define('UsualQ', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    question: Sequelize.STRING,
    group: Sequelize.INTEGER
});

var UsualA = sequelize.define('UsualA', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    answer: Sequelize.STRING,
    group: Sequelize.INTEGER
});

// force: true will drop the table if it already exists
UsualQ.sync({force: false}).then(() => {
});
UsualA.sync({force: false}).then(() => {
});

module.exports = {
    Q: UsualQ,
    A: UsualA
};
