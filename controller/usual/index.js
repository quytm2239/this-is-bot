const ORM = require('./../../model')
const async = require('asyncawait/async');

module.exports = {
    add: function (keyword,sub_keyword,answer) {
        return ORM.Usual.create({
            keyword: keyword,
            sub_keyword: sub_keyword,
            answer: answer
        }).then(saved => {
            // you can now access the newly created task via the variable task
            return saved;
        }).catch(function (err) {
            return null;
        });
    },
    loadAll: function () {
        return ORM.Usual.findAll().then(value => {
            var valueJson = [];
            for (var variable of value) {
                valueJson.push(variable.dataValues);
            }
            return valueJson;
        });
    }
};
