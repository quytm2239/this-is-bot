const async = require('asyncawait/async');
const await = require('asyncawait/await');
module.exports = function(app,controller,router) {
    var utils = app.get('utils');
    router.post('/add-usual',function(req,res) {
        var keyword = req.body.keyword;
        var sec_keyword = req.body.sec_keyword;
        var answer = req.body.answer;
        if (!utils.chkObj(keyword) || !utils.chkObj(answer)) {
            console.log('Param is not valid!');
            res.status(400).send('Param is not valid!');
            return;
        }
        //------------1------------
        var arrayKeys = [];
        if (keyword.indexOf(';') >= 0) {
            arrayKeys = keyword.split(';');
        } else {
            arrayKeys.push(keyword);
        }
        //------------2------------
        var arrayAnswer = [];
        if (answer.indexOf(';') >= 0) {
            arrayAnswer = answer.split(';');
        } else {
            arrayAnswer.push(answer);
        }
        let processInsert = async (function() {
            var success = await (controller.Usual.add(JSON.stringify(arrayKeys),sec_keyword,JSON.stringify(arrayAnswer)));
            return sendResponse(res,success,success ? [success.dataValue] : []);
        });
        processInsert();
    });

    router.post(['/add-exactly'],function(req,res) {
        var keyword = req.body.keyword;
        var sec_keyword = req.body.sec_keyword;
        var answer = req.body.answer;

        if (!utils.chkObj(keyword) || !utils.chkObj(answer)) {
            res.status(400).send('Param is not valid!');
            return;
        }
        //------------1------------
        var arrayKeys = [];
        if (keyword.indexOf(';') >= 0) {
            arrayKeys = keyword.split(';');
        } else {
            arrayKeys.push(keyword);
        }
        //------------2------------
        var arrayAnswer = [];
        if (answer.indexOf(';') >= 0) {
            arrayAnswer = answer.split(';');
        } else {
            arrayAnswer.push(answer);
        }
        let processInsert = async (function() {
            var success = await (controller.Exactly.add(JSON.stringify(arrayKeys),sec_keyword,JSON.stringify(arrayAnswer)));
            return sendResponse(res,success,success ? [success.dataValue] : []);
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
