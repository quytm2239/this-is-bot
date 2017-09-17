
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
            var has = obj.question.includes("world");

            var jsonData = {
                username: socket.username,
                message: data,
                time: new Date().getTime()
            };
            socket.emit('new_message', jsonData);
        });
    });
};
