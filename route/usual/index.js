const async = require('asyncawait/async');
const await = require('asyncawait/await');
module.exports = function(app,controller,router) {
    var utils = app.get('utils')
    router.post('/add-usual',function(req,res) {
        var question = req.body.question;
        var answer = req.body.answer;
        var group = req.body.group;

        if (!utils.chkObj(question) || !utils.chkObj(answer) || !utils.chkObj(group)) {
            res.status(400).send('Param is not valid!');
            return;
        }
        var processInsert = async (function() {
            var successQ = await (controller.Usual.addQ(question,group));
            var successA = await (controller.Usual.addA(answer,group));
            var success = successQ && successA;
            return sendResponse(res,success,success ? [successQ.dataValues,successA.dataValues] : []);
        });
        processInsert();
    });

    router.get('/usual',function(req,res) {
        var processLoad = async (function() {
            console.log('1');
            var successQ = await (controller.Usual.loadAllQ);
            console.log(successQ);
            var successA = await (controller.Usual.loadAllA);
            console.log(successA);
            var successE = await (controller.Exactly.loadAll);
            console.log(successE);
            var success = successQ && successA && successE;
            console.log(success);
            return sendResponse(res,success,success ? [successQ.dataValues,successA.dataValues] : []);
        });
        processLoad();
    });

    function sendResponse(res,success,data) {
        if (success) {
            res.status(200).send(data);
        } else {
            res.status(400).send(data);
        }
    }
};
