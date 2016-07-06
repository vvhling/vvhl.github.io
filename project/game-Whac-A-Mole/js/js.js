$(function(){
    var randomA = function(){  //返回一个随机的a
        var a = $(".mouse");
        for(var i = 0;i < a.length;i ++){  //先遍历一遍a元素让它为初始状态
            $(a[i]).animate({height:"90px"});
        }
        var randomNum = Math.floor(Math.random() * a.length);
        return a[randomNum];
    };

    setInterval(function(){  //设置一个定时器
        $(randomA()).animate({height:"150px"});
    },2000);

    var c = 0;
    var score = function(){  //点击事件执行的次数
        $("li").click(function(){  //点击li后地鼠缩回洞里
            c++;
            $(this).find("a").animate({height:"90px"});
        });
        return c;
    };

    $(".num").html(score());

});




























































