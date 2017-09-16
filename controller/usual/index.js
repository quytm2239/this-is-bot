const ORM = require('./../../model')
const async = require('asyncawait/async');

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
    },
    loadAllQ: function () {
        return ORM.Usual.Q.findAll().then(value => {
            return value;
        });
    },
    loadAllA: function () {
        return ORM.Usual.A.findAll().then(value => {
            return value;
        });
    }
};
