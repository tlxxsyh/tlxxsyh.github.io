var str = "{\n";
alert("页面已废弃！");
function create() {
    str = "{\n";
    //读题目类型
    var str_type = '"type": "' + $('#subject').val() + '",\n';
    //读题目问题
    var str_question = '"question": "' + $('#question-text').val() + '",\n';
    //选项的读写
    var str_option = '"option": [\n';
    var option = $('#option-textarea').val().split('、');
    for (var i = 0; i < option.length; i++) {
        option[i] = option[i].replace(/\r|\n|- | /ig, "");
        if (i != option.length - 1) {
            option[i] = option[i].slice(0, -1);
        }
        if (i != 0) {
            str_option = str_option + '\t"' + option[i] + '",\n';
        }
    }
    // for(var i = 0; i  <option.length-1;i++){
    //     str_option = str_option + '\t"' + i + '",\n';
    // }
    console.log(option);
    //为了把末尾逗号删除
    str_option = str_option.slice(0, -2);
    str_option = str_option + "\n],\n";
    //答案读取
    var str_answer = '"answer": "' + $('#answer-text').val() + '"\n},';
    str = str + str_type + str_question + str_option + str_answer;
    $('#json-my').val(str);
}

function copy() {
    var textarea = $('#json-my');
    textarea.select();
    document.execCommand('Copy');
    textarea.val("复制成功！");
    $('#question-text').val('');
    $('#option-textarea').val('');
    $('#answer-text').val('');
}