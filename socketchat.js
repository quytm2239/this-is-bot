var common_room = 69;

module.exports = function(io) {
    console.log('->*<3- [SOCKETCHAT is LOADED] ->*<3-');
    io.on('connection', function (socket) {
        console.log(socket.id + ' connected');

        var addedUser = false;

        socket.on('join_chat', function (data) {
            if (addedUser) return;
            console.log(data);
            socket.username = data.username;
            socket.room = common_room;
            socket.join(common_room);

            var room = io.sockets.adapter.rooms[common_room];

            var jsonData = {
                room : common_room,
                username : data.username,
                total_online : room.length
            };

            io.sockets["in"](socket.room).emit('join_chat', jsonData);
        });

        // when the client emits 'new message', this listens and executes
        socket.on('new_message', function (data) {
            console.log(data);
            var mSecondsTime = new Date().getTime();

            var jsonData = {
                username: socket.username,
                message: data,
                time: mSecondsTime
            };
            socket.emit('new_message', jsonData);
            // io.sockets["in"](socket.room).emit('new_message', jsonData);
        });

        // socket.on('load_history', function (data){
        //     var beginIndex = data.begin_index;
        //
        //     getChatHistory(socket.room, beginIndex, false, function(result){
        //         socket.emit('load_history', {
        //             history: result
        //         });
        //     });
        // });
        //https://www.ibm.com/developerworks/library/wa-bluemix-html5chat/

        // when the client emits 'typing', we broadcast it to others
        socket.on('typing', function () {
        // io.sockets["in"](socket.room).emit('typing',{
        //     username: socket.username
        // });

            socket.emit('typing', {
                username: socket.username
            });
        });

        // when the client emits 'stop typing', we broadcast it to others
        socket.on('stop_typing', function () {
        // io.sockets["in"](socket.room).emit('stop_typing',{
        //     username: socket.username
        // });

            socket.emit('stop_typing', {
                username: socket.username
            });
        });

        // when the user disconnects.. perform this
        socket.on('disconnect', function () {
            io.sockets["in"](socket.room).emit('user_left',{
                username: socket.username
            });
            console.log(socket.username + ' has left room: ' + socket.room);
        });
    });
};
