
module.exports = function(io, datas) {

    const Ukeys = datas.U.keyword;
    const Usubkeys = datas.U.sub_keyword;
    const Uanswer = datas.U.answer;

    const Ekeys = datas.E.keyword;
    const Esubkeys = datas.E.sub_keyword;
    const Eanswer = datas.E.answer;

    console.log('->*<3- [SOCKETCHAT is LOADED] ->*<3-');
    io.on('connection', function (socket) {
        console.log(socket.id + ' connected');

        socket.on('new_message', function (data) {
            console.log(data);
            var answer = require('./AI-detect').getAnswer(data,Ukeys,Usubkeys,Uanswer);
            if (answer == false) {
                answer = require('./AI-detect').getAnswer(data,Ekeys,Esubkeys,Eanswer);
                if (answer == false) {
                    answer = 'Xin lỗi, tôi chưa biết trả lời như thế nào về: ' + data + '\n' +'Bạn có thể chỉ dẫn cho tôi được không?';
                }
            }

            var jsonData = {
                username: socket.username,
                message: answer,
                time: new Date().getTime()
            };
            socket.emit('new_message', jsonData);
        });
    });
};
