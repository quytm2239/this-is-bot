module.exports = function(app,router) {
    const controller = require('./../controller');
    require('./usual')(app,controller,router);
};
