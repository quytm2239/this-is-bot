const AIprocessdata = require('./AI-process-data');
module.exports = function(io) {
    var controller = require('./../controller');
    Promise.all([
        controller.Usual.loadAll(),
        controller.Exactly.loadAll()
    ]).then(res => {
        var processedU = AIprocessdata.separateData(res[0]);
        var processedE = AIprocessdata.separateData(res[1]);
        require('./socketchat')(io,{
            U: processedU,
            E: processedE
        });
    }).catch(err => {
        console.log(err);
    });
};
