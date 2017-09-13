$(document).ready(function(){
    var btnSubmit = $('.button-sumit');
    var inputQ = $('.input-question');
    var inputG = $('.input-group');
    var inputA = $('.input-answer');

    btnSubmit.on('click',function () {
        console.log(inputQ.val() + inputG.val() + inputA.val());
    });
});
