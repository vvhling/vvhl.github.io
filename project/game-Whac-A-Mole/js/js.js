//$(function(){
//	function radom(){
//		var arr = $("li"); //获得一个数组
//         for(var i = 0,len = arr.length;i < len;i ++){ //遍历清空
//             arr[i].style.background = "#fff";
//         }
//		var l = arr.length; //获取到li的全部个数
//	    function radomNum(arr){
//	    	return arr[Math.floor(Math.random() * l)];
//	    }
//	    var radomList = radomNum(arr);  //返回的随机的Li元素
//	    var c = ["url('images/mouse.png')"];
//	    var cl = c.length;
//	    function color(c){
//	    	return c[Math.floor(Math.random() * cl)];
//	    }
//	    var radomColor = color(c); //返回的随机颜色
//	    radomList.style.background = radomColor;
//	}
//	var a = setInterval(function(){  //创建一个定时器
//     	radom();
//     },1000);
//
//     var clickTimes = function(){
//         $(".box").click(function(){
//             $(this).css("background","#fff");
//         });
//         return x;
//     };
//     clickTimes();
//});

$(function(){
    var randomA = function(){  //返回一个随机的a
        var a = $(".mouse");
        for(var i = 0;i < a.length;i ++){  //先遍历一遍a元素让它为初始状态
            $(a[i]).animate({height:"90px"});
        }
        var randomNum = Math.floor(Math.random() * a.length);
        return a[randomNum];
    };
    var cli = function(){  //设置一个定时器
        setInterval(function(){
            $(randomA()).animate({height:"150px"});
        },2000);
    };

    $("li").click(function(){  //点击li后地鼠缩回洞里
        $(this).find("a").animate({height:"90px"});
    });

    


    var score = function(){  //点击事件执行的次数
        var c = 0;
        if(cli()){
            c ++;
        }
        return c;
    }

    $(".num").html(score());
    function s(){
        var sec = 30;
        for(var i = 0;i < sec; i ++){
            sec --;
        }
        return sec;
    }

    setTimeout(function(){
        $(".time").html(s());
    },1000)
});




























































