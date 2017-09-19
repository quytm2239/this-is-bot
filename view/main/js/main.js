socket = io();
$(document).ready(function(){
    var timer;
    var delay = 600;

    var chatArea = $('.chat-container');
    var chatInput = $('.chat-input');
    chatInput.keyup(function(e){
        if(e.keyCode == 13)
        {
            var message_content = $(this).val();
            if (message_content == null || message_content.length == 0) {
                return;
            }
            $(this).trigger("enterKey");
        }
    });

    chatInput.bind("enterKey",function() {
        //console.log($(this).val());
        window.clearTimeout(timer);
        var message_content = $(this).val();
        chatInput.val('');
        timer = window.setTimeout(function(){
            chatArea.append(makeSendText('You',message_content));
            socket.emit('new_message',message_content);
        }, delay);
    });

    socket.on('new_message',function (data) {
        chatArea.append(maketext('Bot',data.message));
        chatArea.scrollTop(chatArea.prop("scrollHeight"));
    });

    // $('body,html').animate({
    //     scrollTop: $('.chat-container li:last-child').offset().top + 'px'
    // }, 1000);
});

function maketext(owner,message) {
    var text = '<li class="receive-message"><div class="message-item"><div class="message-owner-receive">' + owner + '</div><div class="message-content receive-message">' + message + '</div></div></li>';
    return text;
}

function makeSendText(owner,message) {
    var text = '<li class="sent-message"><div class="message-item"><div class="message-owner-sent">' + owner + '</div><div class="message-content sent-message">' + message + '</div></div></li>';
    return text;
}
