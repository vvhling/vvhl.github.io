$(function(){
    function radom(){
        var arr = document.getElementsByTagName("li"); //获得一个数组
        var l = arr.length; //获取到li的全部个数
        function radomNum(arr){
            return arr[Math.floor(Math.random() * l)];
        }
        var radomList = radomNum(arr);  //返回的随机的Li元素
        var c = ["red","green","blue"];
        var cl = c.length;
        function color(c){
            return c[Math.floor(Math.random() * cl)];
        }
        var radomColor = color(c); //返回的随机颜色
        radomList.style.background = radomColor;
    }
    setInterval(function(){  //创建一个定时器
        radom();
    },1000)
})

