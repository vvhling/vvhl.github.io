$(function(){
	function radom(){
		var arr = $("li"); //获得一个数组
        for(var i = 0,len = arr.length;i < len;i ++){ //遍历清空
            arr[i].style.background = "#fff";
        }
		var l = arr.length; //获取到li的全部个数
	    function radomNum(arr){
	    	return arr[Math.floor(Math.random() * l)];
	    }
	    var radomList = radomNum(arr);  //返回的随机的Li元素
	    var c = ["url('images/pic.png')","url('images/pic.png')"];
	    var cl = c.length;
	    function color(c){
	    	return c[Math.floor(Math.random() * cl)];
	    }
	    var radomColor = color(c); //返回的随机颜色
	    radomList.style.background = radomColor;
	}
	var a = setInterval(function(){
    	radom();
    },1000);

    var clickTimes = function(){
        var x = 0;
        x++;
        $(".box").click(function(){
            $(this).css("background","#fff");
        });
        return x;
    };
    //var cliFn = function(){
    //    var cliNum = 0; //点击的初始值为0
    //    $(".box").addEventListener("click",function(){
    //        cliNum ++;
    //    });
    //    return cliNum;
    //}
    window.onload = function(){
        $(".score").html("分数：" + clickTimes());
    }
});
