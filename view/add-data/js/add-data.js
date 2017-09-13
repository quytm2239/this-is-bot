$(document).ready(function(){
    var btnSubmit = $('.button-sumit');
    var inputQ = $('.input-question');
    var inputG = $('.input-group');
    var inputA = $('.input-answer');

    btnSubmit.on('click',function () {
        console.log(inputQ.val() + inputG.val() + inputA.val());
        $.post("/api/add-usual", {
            q: inputQ.val(),
            g: inputG.val(),
            a: inputA.val()
        }, function(result){
            console.log(result);
        });
    });
});
