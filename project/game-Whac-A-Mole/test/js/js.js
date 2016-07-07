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
    var radomLi = function(){  //返回一个随机的li
        var li = $("li");
        //for(var i = 0;i < li.length;i ++){  //先遍历li 使它成为初始状态
        //    li[i.$("mouse")].animate({height:"90px"});
        //}
        var radomNum = Math.floor(Math.random() * li.length);
        return li[radomNum];
    }
    alert($("radomLi.mouse").tagName);
    $("radomLi.mouse").animate({height:"150px"});
});



























































