module.exports = {
    separateData: function (input) {
        var resultKey = [];
        var resultSubKey = [];
        var resultAnswer = [];
        for (var i = 0; i < input.length; i++) {
            resultKey.push(input[i].keyword);
            resultSubKey.push(input[i].sub_keyword);
            resultAnswer.push(input[i].answer);
        }
        return {
            keyword: resultKey,
            sub_keyword: resultSubKey,
            answer: resultAnswer
        };
    }
};
