//页面加载完成时执行
window.onload = function () {
    // allQuestion();
    search()
}
//搜索题目，如果输入空值就会返回所有题目
function search() {
    var q_num = 0;
    //先清空表格内容
    $('table').empty();
    var text_search = $('#text-search').val();
    // alert(text_search);
    //开始链接
    var options=$("#subject option:selected"); //获取选中的项
    var url = options.val();
    // url = "../../json/economics.json"/*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
    var request = new XMLHttpRequest();
    request.open("get", url);/*设置请求方法与路径*/
    request.send(null);/*不发送数据到服务器*/
    request.onload = function () {/*XHR对象获取到返回信息后执行*/
        if (request.status == 200) {/*返回状态为200，即为数据获取成功*/
            var json = JSON.parse(request.responseText);
            for (var i = 0; i < json.item.length; i++) {
                //简化变量长度
                var question = json.item[i].question;
                var option = json.item[i].option;
                var answer = json.item[i].answer;
                var type = json.item[i].type;
                //查找指定题目
                if (question.indexOf(text_search) != -1) {
                    //增加一题
                    q_num++;
                    //添加元素，注意td一定要放在tr里，而单独tr也无法显示
                    $(".q-table").append("<tr>" + "<td>" + question + "</td>" + "</tr>");
                    //遍历有多少个选项
                    for (var j = 0; j < option.length; j++) {
                        // 先与ascii字符拼接（选项号）
                        option[j] = String.fromCharCode(65 + j) + ". " + option[j];
                        // 如果是正确答案就标黄色，否则直接输出
                        if (answer.indexOf((j + 1).toString()) != -1) {

                            $(".q-table").append("<tr bgcolor='yellow'>" + "<td>" + option[j] + "</td>" + "</tr>");
                        }
                        else {
                            $(".q-table").append("<tr>" + "<td>" + option[j] + "</td>" + "</tr>");
                        }
                    }
                    //输出答案
                    //单选或者多选时
                    var ans = "";//每次开始前答案字符串要置空
                    if (type == "multiple-answer" || type == "multiple-choice") {
                        //遍历答案中的数字，每隔一个数字转一次字符再拼接，最后去掉最前面的顿号
                        for (var k = 0; k < answer.length; k = k + 2) {
                            num = answer[k];
                            num = parseInt(num);
                            ans = ans + "、" + String.fromCharCode(64 + num);
                        }
                        ans = ans.slice(1);
                    }

                    //输出答案字符串，然后输出换行
                    $(".q-table").append("<tr bgcolor='red'>" + "<td>答案：" + ans + "</td>" + "</tr>");
                    $(".q-table").append("<br>")
                }
            }
            str = "共计搜到题目数："+ q_num;
            $('.tip').text(str);
            // alert(json.item.length);
        }
    }


}

//访问新页面
function gotoQuestion() {
    window.open("https://tlxxssyh.github.io/html/study/question.html","_blank");
}

//输出答案
function printQuestion() {

}