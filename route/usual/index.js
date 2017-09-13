
module.exports = function(app,ORM,router) {
    var utils = app.get('utils')
    router.post('/add-usual',function(req,res) {
        var question = req.body.question;
        var answer = req.body.answer;
        var group = req.body.group;

        if (!utils.chkObj(question) || !utils.chkObj(answer) || !utils.chkObj(group)) {
            res.status(400).send('Param is not valid!');
            return;
        }

        ORM.Usual.Q.create({
            question: question,
            group: group
        }).then(savedLog => {
            // you can now access the newly created task via the variable task
            res.status(200).send(savedLog);
        });

        ORM.Usual.A.create({
            answer: answer,
            group: group
        }).then(savedLog => {
            // you can now access the newly created task via the variable task
            res.status(200).send(savedLog);
        });
    })
};
