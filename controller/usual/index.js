const ORM = require('./../../model')
const async = require('asyncawait/async');
const await = require('asyncawait/await');
module.exports = {
    addQ: function (question,group) {
        return ORM.Usual.Q.create({
            question: question,
            group: group
        }).then(saved => {
            // you can now access the newly created task via the variable task
            return saved;
        }).catch(function (err) {
            return null;
        });
    },
    addA: function (answer,group) {
        return ORM.Usual.A.create({
            answer: answer,
            group: group
        }).then(saved => {
            // you can now access the newly created task via the variable task
            return saved;
        }).catch(function (err) {
            return null;
        });
    }
};
