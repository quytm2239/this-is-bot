const ORM = require('./../../model');
const async = require('asyncawait/async');

module.exports = {
    add: function (question,answer) {
        return ORM.Exactly.create({
            question: question,
            answer: answer
        }).then(saved => {
            // you can now access the newly created task via the variable task
            return saved;
        }).catch(function (err) {
            return null;
        });
    },
    loadAll: function () {
        return ORM.Exactly.findAll().then(value => {
            return value;
        });
    }
};
