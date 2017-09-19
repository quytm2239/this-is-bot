const ORM = require('./../../model');
const async = require('asyncawait/async');

module.exports = {
    add: function (keyword,sec_keyword,answer) {
        return ORM.Exactly.create({
            keyword: keyword,
            sec_keyword: sec_keyword,
            answer: answer
        }).then(saved => {
            // you can now access the newly created task via the variable task
            return saved;
        }).catch(function (err) {
            console.log('----------------> Exactly add has an error! <----------------');
            console.log(err);
            return null;
        });
    },
    loadAll: function () {
        return ORM.Exactly.findAll().then(value => {
            var valueJson = [];
            for (var variable of value) {
                valueJson.push(variable.dataValues);
            }
            return valueJson;
        });
    }
};
