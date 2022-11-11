$(function () { 
    var max_num = 4; var time_stop = 4250; var time_swap = 1250; var num = 0; 
    var chosen_circle_color = "#0aa1ed"; var chosen_not_circle_color = "#ffffff"; 
function every_thing() { 
    $("#div_img").animate({ left: -$(".every_img").eq(0).width() * num }, time_swap); 
    $(".every_circle").eq(num).css("background", chosen_circle_color).siblings('li').css("background", chosen_not_circle_color); } 
    function Right_move() { if (num >= max_num) { num = 0; } else { num++; } every_thing(); } 
    function Left_move() { if (num === 0) { num = max_num; } else { num--; } every_thing(); } 
    $(".every_circle").eq(0).css("background", chosen_circle_color); 
    $("#div_img").width($('.every_img').length * $('.every_img').eq(0).width()); 
    var id = setInterval(Right_move, time_stop); $("#carousel_main").mouseover(function () { clearInterval(id) }); 
    $("#carousel_main").mouseout(function () { id = setInterval(Right_move, time_stop); }); 
    $(".left").click(function () { $("#div_img").stop(); Left_move(); }); $(".right").click(function () { 
        $("#div_img").stop(); Right_move(); }); 
        $(".every_circle").mouseover(function () { num = $(this).index(); $("#div_img").stop(); every_thing(); }); 
    }); 
    function link(jinliweili_Url, quality_target) { window.open(jinliweili_Url, quality_target);}