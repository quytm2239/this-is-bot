const async = require('asyncawait/async');
const await = require('asyncawait/await');
module.exports = function(app,controller,router) {
    var utils = app.get('utils');
    router.post(['/add-usual','/add-exactly'],function(req,res) {
        var keyword = req.body.keyword;
        var sub_keyword = req.body.sub_keyword;
        var answer = req.body.answer;

        if (!utils.chkObj(keyword) || !utils.chkObj(sub_keyword) || !utils.chkObj(answer)) {
            res.status(400).send('Param is not valid!');
            return;
        }
        if (req.route.path == '/add-usual') {
            let processInsert = async (function() {
                var success = await (controller.Usual.add(keyword,sub_keyword,answer));
                return sendResponse(res,success,success ? [success.dataValue] : []);
            });
            processInsert();
        } else {
            let processInsert = async (function() {
                var success = await (controller.Exactly.add(keyword,sub_keyword,answer));
                return sendResponse(res,success,success ? [success.dataValue] : []);
            });
            processInsert();
        }
    });

    function sendResponse(res,success,data) {
        if (success) {
            res.status(200).send(data);
        } else {
            res.status(400).send(data);
        }
    }
};
