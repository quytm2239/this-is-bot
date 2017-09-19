const DEFAULT_ANSWER = 'Xin lỗi, tôi chưa biết trả lời như thế nào về: <br>' + 'P<br>';
module.exports = function(io, datas) {

    const Ukeys = datas.U.keyword;
    const Useckeys = datas.U.sec_keyword;
    const Uanswer = datas.U.answer;

    const Ekeys = datas.E.keyword;
    const Eseckeys = datas.E.sec_keyword;
    const Eanswer = datas.E.answer;
    console.log('->*<3- [SOCKETCHAT is LOADED] ->*<3-');
    io.on('connection', function (socket) {
        console.log(socket.id + ' connected');

        var cacheArray = [];

        socket.on('new_message', function (data) {
            var answer = '';

            // if (cacheArray.length > 0) {
            //     for (var obj of cacheArray) {
            //         if (data in obj) {
            //             // found key data in this obj
            //             answer = obj[data];
            //             break;
            //         }
            //     }
            // }
            if (answer.length == 0) {
                // not found in cacheArray
                answer = require('./AI-detect').getAnswer(data,Ukeys,Useckeys,Uanswer);
                if (answer === 'NOT FOUND') {
                    answer = require('./AI-detect').getAnswer(data,Ekeys,Eseckeys,Eanswer);
                    if (answer === 'NOT FOUND') {
                        answer = DEFAULT_ANSWER.replace("P", data);
                    }
                }
            }

            // // keep this in cacheArray
            // if (cacheArray.length == 50) {
            //     // remove oldest (first obj) in cacheArray if it reach 50 items
            //     console.log('remove oldest obj when reach 50 items');
            //     cacheArray.shift();
            // }
            // // for ()
            // var cacheObj = {};
            // cacheObj[data] = answer;
            // cacheArray.push(cacheObj);

            var jsonData = {
                username: socket.username,
                message: answer,
                time: new Date().getTime()
            };
            socket.emit('new_message', jsonData);
        });
    });
};
