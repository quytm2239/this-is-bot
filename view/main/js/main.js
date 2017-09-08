socket = io();
$(document).ready(function(){
    $('.chat-input').keyup(function(e){
        if(e.keyCode == 13)
        {
            $(this).trigger("enterKey");
        }
    });

    $('.chat-input').bind("enterKey",function() {
        console.log($(this).val());
        var message_content = $(this).val();
        socket.emit('new_message',message_content);
        $(this).val('');
    });

    socket.on('new_message',function (data) {
        console.log(data);
        $('.chat-container').append(maketext(data.message));
        // $(".chat-input").append("<li>Appended item</li>");
    });
});

function maketext(message) {
    var text = '<li><span class="message-owner"><b>The Bot</b></span> : <span class="message_content">' + message + '</span></li>';
    return text;
}
