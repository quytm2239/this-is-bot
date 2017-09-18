module.exports = {
    getAnswer: function (input,keys,subkeys,answer) {
        var matchedIndexKeys = [];
        var subKeywordFromMatchedKeys = [];
        for (let i = 0; i < keys.length; i++) { // check on
            if(input.indexOf(keys[i]) >= 0) {
                // found that input contain main keyword
                // put in the matchedList
                matchedIndexKeys.push(i);
                subKeywordFromMatchedKeys.push({
                    real_index: i,
                    sub_key: subkeys[i]
                });
            }
        }
        if (matchedIndexKeys.length == 0) { // not found
            return false;
        } else {
            if (matchedIndexKeys.length == 1) { // found once
                let arrayAnswer = JSON.parse(answer[matchedIndexKeys[0]]);
                let finalAnswer = require('./AI-process-data').getRandomInArray(arrayAnswer);
                console.log(finalAnswer);
                return finalAnswer;
            } else { // found > once
                for (let i = 0; i < subKeywordFromMatchedKeys.length; i++) {
                    if (input.indexOf(subKeywordFromMatchedKeys[i].sub_key) >= 0) {
                        // found input contain subkey
                        var subkeyObj = subKeywordFromMatchedKeys[i];
                        let arrayAnswer = JSON.parse(answer[subkeyObj.real_index]);
                        let finalAnswer = require('./AI-process-data').getRandomInArray(arrayAnswer);
                        console.log(finalAnswer);
                        return finalAnswer;
                    }
                }
                return false;
            }
        }
    }
};
