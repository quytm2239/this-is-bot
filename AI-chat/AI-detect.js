module.exports = {
    getAnswer: function (input,keys,seckeys,answer) {
        var seckeyFound = [];
        for (let i = 0; i < keys.length; i++) { // check on
            let keyObj = JSON.parse(keys[i]);
            if (keyObj.length == 1) { // contain only one key
                if(input.indexOf(keyObj[0]) >= 0) {
                    // found that input contain main keyword
                    // put in the matchedList
                    seckeyFound.push({
                        real_index: i,
                        key: keyObj[0],
                        sec_key: seckeys[i]
                    });
                }
            } else { // contain MORE THAN one key
                for (let key of keyObj) {
                    if(input.indexOf(key) >= 0) {
                        // found that input contain main keyword
                        // put in the matchedList
                        seckeyFound.push({
                            real_index: i,
                            key: keyObj[i],
                            sec_key: seckeys[i]
                        });
                    }
                }
            }
        }
        if (seckeyFound.length == 0) { // not found
            return 'NOT FOUND';
        } else {
            //*****************************FOUND ONCE***********************************
            if (seckeyFound.length == 1) {
                let seckeyObj = seckeyFound[0];
                if (seckeyObj.sec_key == '#') {
                    // # means no sec_key, just ony check keyword
                    let arrayAnswer = JSON.parse(answer[seckeyObj.real_index]); // get array answer from real_index (original index)
                    let finalAnswer = require('./AI-process-data').getRandomInArray(arrayAnswer);
                    return finalAnswer;
                } else if (input.indexOf(seckeyObj.sec_key) >= 0) {
                    // found input contain seckey
                    let KeyPosition = input.indexOf(seckeyObj.key);
                    let SecKeyPosition = input.indexOf(seckeyObj.sec_key);
                    // Check order of Key n SubKey
                    if ((KeyPosition + seckeyObj.key.length) < SecKeyPosition) {
                        let space = input.charAt(KeyPosition + seckeyObj.key.length + 1);
                        let arrayAnswer = JSON.parse(answer[seckeyObj.real_index]); // get array answer from real_index (original index)
                        let finalAnswer = require('./AI-process-data').getRandomInArray(arrayAnswer);
                        return finalAnswer;
                        // if (space === ' ') {
                        //     let arrayAnswer = JSON.parse(answer[seckeyObj.real_index]); // get array answer from real_index (original index)
                        //     let finalAnswer = require('./AI-process-data').getRandomInArray(arrayAnswer);
                        //     // console.log(finalAnswer);
                        //     return finalAnswer;
                        // } else {
                        //     // fail because FOUND KEY n SECKEY, correct order but there is no ' ' between them
                        //     return 'NOT FOUND';
                        // }
                    } else {
                        // fail because FOUND KEY n SECKEY but wrong order
                        return 'NOT FOUND';
                    }
                }
            } else {
                //***********************FOUND MORE THAN ONCE***************************
                // 1. Start loop through seckeyFound list to check if input contain which seckey
                let NO_CHECK_SECKEY = null;
                for (let i = 0; i < seckeyFound.length; i++) {
                    let seckeyObj = seckeyFound[i];

                    if (seckeyObj.sec_key == '#') {
                        NO_CHECK_SECKEY = seckeyObj;
                    } else {
                    if (input.indexOf(seckeyObj.sec_key) >= 0) {
                        // found input contain seckey
                        let KeyPosition = input.indexOf(seckeyObj.key);
                        let SecKeyPosition = input.indexOf(seckeyObj.sec_key);
                        // Check order of Key n SubKey
                        if ((KeyPosition + seckeyObj.key.length) < SecKeyPosition) {
                            // < means between 2 keys, there is a ' '
                            let space = input.charAt(KeyPosition + seckeyObj.key.length + 1);
                            let arrayAnswer = JSON.parse(answer[seckeyObj.real_index]); // get array answer from real_index (original index)
                            let finalAnswer = require('./AI-process-data').getRandomInArray(arrayAnswer);
                            // console.log(finalAnswer);
                            return finalAnswer;

                            // if (space === ' ') {
                            //     let arrayAnswer = JSON.parse(answer[seckeyObj.real_index]); // get array answer from real_index (original index)
                            //     let finalAnswer = require('./AI-process-data').getRandomInArray(arrayAnswer);
                            //     // console.log(finalAnswer);
                            //     return finalAnswer;
                            // } else {
                            //     // fail because FOUND KEY n SECKEY, correct order but there is no ' ' between them
                            //     return 'NOT FOUND';
                            // }
                        } else {
                            // fail because FOUND KEY n SECKEY but wrong order
                            return 'NOT FOUND';
                        }
                    }
                }
                // 2. Input does not contain any seckey
                let arrayAnswer = JSON.parse(answer[NO_CHECK_SECKEY.real_index]); // get array answer from real_index (original index)
                let finalAnswer = require('./AI-process-data').getRandomInArray(arrayAnswer);
                // console.log(seckeyObj.key);
                // if (input.length == seckeyObj.key.length) {
                //     // Input is same with key
                //     // console.log(finalAnswer);
                //     return finalAnswer;
                // }
                return finalAnswer;
                // return 'NOT FOUND';
            }
        }
    }
};
