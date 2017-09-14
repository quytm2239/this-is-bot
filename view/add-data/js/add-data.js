$(document).ready(function(){
    var btnSubmit = $('.button-sumit');
    var inputQ = $('.input-question');
    var inputG = $('.input-group');
    var inputA = $('.input-answer');

    btnSubmit.on('click',function () {
        $.post("/api/add-usual", {
            question: inputQ.val(),
            group: inputG.val(),
            answer: inputA.val()
        }, function(result){
            console.log(result);
        });
    });
});
