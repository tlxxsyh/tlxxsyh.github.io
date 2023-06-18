function feedback(){
    var title = document.getElementById('mytitle');
    var text = document.getElementById('text');
    var sex = document.getElementsByName('sex');
    // alert(text.value);
    if(title.value == ""){
        alert("标题不能为空！");
    }
    else if(text.value == ""){
        alert("输入信息不能为空！");
    }
    else if(sex[0].checked == false && sex[1].checked == false){
        alert("性别你还没选呢!");
    }
    else{
        alert("欢迎你，你的标题是："+title.value);
    }
}