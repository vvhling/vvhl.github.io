/*导航部分*/
function changeNav(){
	var article = document.getElementById("article");
	article.style.borderBottom = "solid 1px #000";
	article.style.borderLeft =  "none";
	article.style.borderTop =  "none";
	article.style.borderRight =  "none";
	article.style.width = "100%";
}
function changeNavOut(){
	var article = document.getElementById("article");
	article.style.borderBottom = "none";
	article.style.borderLeft =  "solid 1px #000";
	article.style.borderTop =  "solid 1px #000";
	article.style.borderRight =  "solid 1px #000";
	article.style.width = "98%";
	
}