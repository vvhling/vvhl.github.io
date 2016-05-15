/*导航部分*/
function changeNav(){
	var myproject = document.getElementById("myproject");
	myproject.style.borderBottom = "solid 1px #000";
	myproject.style.borderLeft =  "none";
	myproject.style.borderTop =  "none";
	myproject.style.borderRight =  "none";
	myproject.style.width = "100%";
}
function changeNavOut(){
	var myproject = document.getElementById("myproject");
	myproject.style.borderBottom = "none";
	myproject.style.borderLeft =  "solid 1px #000";
	myproject.style.borderTop =  "solid 1px #000";
	myproject.style.borderRight =  "solid 1px #000";
	myproject.style.width = "98%";
	
}