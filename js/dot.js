$(".dot").hover(function () {
    $("#dot-message").css("opacity", "1");
}, function () {
    $("#dot-message").css("opacity", "0");
});
$("#dot_1").hover(function () {
    // alert("123");
    $("#dot-name").text("言念的像素点");
    $("#dot-colorID").text("颜色编号：#00FFFF");
    $("#dot-owner").text("领养者：Syhang");
    $("#pixel-name").text("#00FFFF");
    $("#pixel-owner").text("认养人：言念");
    $(".pixel").css("background-color","#00FFFF");
    $("#pixel-name").css("color","#00FFFF");
}, function () {
    $("#dot-message").css("opacity", "0");
});
$("#dot_2").hover(function () {
    $("#dot-name").text("Frankie的像素点");
    $("#dot-colorID").text("颜色编号：#00FFFF");
    $("#dot-owner").text("领养者：Frankie");
    $("#pixel-name").text("#00FFFF");
    $("#pixel-owner").text("认养人：Frankie");
    $(".pixel").css("background-color","#00FFFF");
    $("#pixel-name").css("color","#00FFFF");
}, function () {
    $("#dot-message").css("opacity", "0");
});
$("#dot_3").hover(function () {
    $("#dot-name").text("小小飞");
    $("#dot-colorID").text("颜色编号：#335BA6");
    $("#dot-owner").text("领养者：洪航飞");
    $("#pixel-name").text("#335BA6");
    $("#pixel-owner").text("认养人：洪航飞");
    $(".pixel").css("background-color","#335BA6");
    $("#pixel-name").css("color","#335BA6");
}, function () {
    $("#dot-message").css("opacity", "0");
});