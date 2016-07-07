$(function(){
//随机事件
var randomA = function(){  //返回一个随机的a
    var a = $(".mouse");
    for(var i = 0;i < a.length;i ++){  //先遍历一遍a元素让它为初始状态
        $(a[i]).animate({height:"90px"});
    }
    var randomNum = Math.floor(Math.random() * a.length);
    return a[randomNum];
};

var randomColor = function(){  //返回一个随机颜色的老鼠
    var arrColor = [
        "images/mouse-red.png",
        "images/mouse-green.png",
        "images/mouse-blue.png",
        "images/mouse-black.png"
    ];
    var randomClo = Math.floor(Math.random() * arrColor.length);
    return arrColor[randomClo];
};
    console.log(randomColor());

$(randomA()).children("img").src = randomColor();

setInterval(function(){  //设置一个定时器
    $(randomA()).animate({height:"150px"});
},2000);

function clickMouse(){  //老鼠点击事件
    var c = 0;
    $("li").bind("touchstart",function(){
        if($(this).find("a").height() == 150){
            c ++;
            $(".num").html(c);
        }
        $(this).find("a").animate({height:"90px"});
    });
}
clickMouse();

//倒计时时钟
function countdown(){

}
countdown();

});





























































