var sequelize = require('./../../dbconnection/mysql/connection');
var Sequelize = require('sequelize');
//Create Item Table Structure

var NFQuestion = sequelize.define('NFQuestion', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    question: Sequelize.STRING,
    group: Sequelize.INTEGER
});

var NFAnswer = sequelize.define('NFAnswer', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    answer: Sequelize.STRING,
    group: Sequelize.INTEGER
});

// force: true will drop the table if it already exists
NFQuestion.sync({force: false}).then(() => {
});
NFAnswer.sync({force: false}).then(() => {
});

module.exports = {
    Q: NFQuestion,
    A: NFAnswer
};
