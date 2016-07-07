$(function(){
//随机事件
function random(){
    var arrColor = [
        "images/mouse.png",
        "images/mouse-black.png",
        "images/mouse-red.png",
        "images/mouse-green.png",
        "images/mouse-blue.png"
    ];
    var randomColor = function(){  //返回一个随机颜色
        var randomClo = Math.floor(Math.random() * arrColor.length);
        return arrColor[randomClo];
    };
    var a = $(".mouse");
    for(var i = 0;i < a.length;i ++){  //先遍历一遍a元素让它为初始状态
        $(a[i]).animate({height:"90px"});
    }
    var randomA = function(){  //返回一个随机的a
        var randomNum = Math.floor(Math.random() * a.length);
        return a[randomNum];
    };
    $(randomA()).animate({height:"150px"});
    if($(randomA()).height != "150px"){
        $(randomA()).children("img").attr("src",randomColor());
    }

}
setInterval(function(){  //设置一个定时器
    random();
},1000);

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





























































