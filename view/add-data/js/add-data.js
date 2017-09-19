$(document).ready(function(){
    var btnSubmit = $('.button-sumit');
    var inputK = $('.input-key');
    var inputSK = $('.input-seckey');
    var inputA = $('.textarea-answer');

    btnSubmit.on('click',function () {
        console.log($('input[name=type]:checked').val());
        var type = $('input[name=type]:checked').val();
        if (type == undefined || type == null) {
            alert('Please choose type for this question! [Usual] or [Exactly]');
            return;
        }
        var route = type == "Usual" ? "/api/add-usual" : "/api/add-exactly";
        $.post(route, {
            keyword: inputK.val(),
            sec_keyword: inputSK.val(),
            answer: inputA.val()
        }, function(result){
            console.log(result);
        });
    });
});
