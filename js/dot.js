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
}, function () {
    $("#dot-message").css("opacity", "0");
});