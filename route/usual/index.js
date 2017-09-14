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

    function sendResponse(res,success,data) {
        if (success) {
            res.status(200).send(data);
        } else {
            res.status(400).send(data);
        }
    }
};
