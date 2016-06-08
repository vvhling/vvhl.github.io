/*导航部分*/
$(function(){
    //导航菜单鼠标滑动效果  
	$(".myarticle,.home,.mystar").bind("mouseover",function(){
		$(".myproject").css({"border-bottom":"1px solid #000","border-left":"none","border-top":"none","border-right":"none","width":"78px"});
	});
	$(".myarticle,.myproject,.mystar").bind("mouseout",function(){
		$(".myproject").css({"border-bottom":"none","border-left":"1px solid #000","border-top":"1px solid #000","border-right":"1px solid #000","width":"76px"});
	});
	//搜索框拉伸效果
	$(".searchin").focus(function(){
		$(".searchin").animate({width:"280px"});
	});
	$(".searchin").blur(function(){
		$(".searchin").animate({width:"170px"});
	});
});