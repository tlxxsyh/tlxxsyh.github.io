function create() {
    var str;
    str = "{\n";
    var str_type = '"type": "' + $('#subject').val() + '",\n';
    var str_question = '"question": "' + $('#question-text').val() + '",\n';
    var str_option = '"option": [\n';
    var option = $('#option-textarea').val().split(',');
    for(var i = 0; i  <option.length-1;i++){
        str_option = str_option + '\t"' + i + '",\n';
    }
    str_option = str_option + '\t"' + option[option.length-1] + '"\n],\n';
    var str_answer = '"answer": "'+$('#answer-text').val() + '"\n},';
    
    $('#json-my').val(str + str_type + str_question + str_option +str_answer);
}