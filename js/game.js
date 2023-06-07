//页面加载完成时执行
window.onload = function () {
    search();

}

//搜索题目，输入空值则搜索全部
function search() {
    //计数变量
    var q_num = 0;
    var game_name;
    var game_type;
    var game_pic;
    var game_score;
    var game_description;
    //url
    var url = "../../json/game.json";
    //首先清空内容再去搜索
    $('#big-gamebox').empty();
    //获取检索条件
    var text_search = $('#game-text').val();
    var option = $("#game-select option:selected").val();
    var request = new XMLHttpRequest();
    request.open("get", url);/*设置请求方法与路径*/
    request.send(null);/*不发送数据到服务器*/
    request.onload = function () {/*XHR对象获取到返回信息后执行*/
        if (request.status == 200) {/*返回状态为200，即为数据获取成功*/
            var json = JSON.parse(request.responseText);
            for (var i = 0; i < json.game.length; i++) {
                //简化变量长度
                game_name = json.game[i].name;
                game_type = json.game[i].type;
                game_pic = json.game[i].pic;
                game_score = json.game[i].score;
                game_description = json.game[i].description;
                //查找指定游戏
                if ((json.game[i].name.indexOf(text_search) != -1) && (json.game[i].type.indexOf(option) != -1)) {
                    //增加一个游戏
                    q_num++;
                    
                    $("#big-gamebox").append('<div class="game-box">' + '</div>');
                    $("#big-gamebox").children(":last-child").append('<img src="' + game_pic + '" alt="游戏图片" class="game-img">');
                    $("#big-gamebox").children(":last-child").append('<div class="game-discription-box">' + '</div>');
                    $("#big-gamebox").children(":last-child").children(":last-child").append('<p class="game-title">' + game_name + '</p>');
                    $("#big-gamebox").children(":last-child").children(":last-child").append('<p class="game-discription"><font color="yellow">游戏类型：</font>' + game_type + '</p>');
                    $("#big-gamebox").children(":last-child").children(":last-child").append('<p class="game-discription"><font color="yellow">游戏评分：</font>' + game_score + '</p>');
                    $("#big-gamebox").children(":last-child").children(":last-child").append('<p class="game-discription"><font color="yellow">游戏介绍：</font>' + game_description + '</p>');
                }
            }

        }
        $('#game-num').text("共找到："+q_num+"个游戏");
    }
}