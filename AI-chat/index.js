module.exports = function(io) {
    var controller = require('./../controller');
    Promise.all([
        controller.Usual.loadAll(),
        controller.Exactly.loadAll()
    ]).then(res => {
        var processedU = require('./AI-process-data').separateData(res[0]);
        var processedE = require('./AI-process-data').separateData(res[1]);
        require('./socketchat')(io,{
            U: processedU,
            E: processedE
        });
    }).catch(err => {
        console.log(err);
    });
};
