module.exports = {
    separateData: function (input) {
        var resultKey = [];
        var resultSecKey = [];
        var resultAnswer = [];
        for (var i = 0; i < input.length; i++) {
            resultKey.push(input[i].keyword);
            resultSecKey.push(input[i].sec_keyword);
            resultAnswer.push(input[i].answer);
        }
        return {
            keyword: resultKey,
            sec_keyword: resultSecKey,
            answer: resultAnswer
        };
    },
    getRandomInArray: function (input) {
        if (input && input.length > 0) {
            let randIndex = Math.floor(Math.random() * input.length);
            return input[randIndex];
        }
    }
};
