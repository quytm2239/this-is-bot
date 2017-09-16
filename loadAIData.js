module.exports = function(io) {
    var controller = require('./controller');

    Promise.all([
        controller.Usual.loadAllQ(),
        controller.Usual.loadAllA(),
        controller.Exactly.loadAll()
    ]).then(function (res) {
        require('./socketchat')(io);
    });
};
