/*导航部分*/
$(function(){
    //导航菜单鼠标滑动效果  
	$(".article,.myproject,.star").bind("mouseover",function(){
		$(".home").css({"border-bottom":"1px solid #000","border-left":"none","border-top":"none","border-right":"none","width":"78px"});
	});
	$(".article,.myproject,.star").bind("mouseout",function(){
		$(".home").css({"border-bottom":"none","border-left":"1px solid #000","border-top":"1px solid #000","border-right":"1px solid #000","width":"76px"});
	});
	//搜索框拉伸效果
	$(".searchin").focus(function(){
		$(".searchin").animate({width:"320px"});
	})
	$(".searchin").blur(function(){
		$(".searchin").animate({width:"170px"});
	})
});

