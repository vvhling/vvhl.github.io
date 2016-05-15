/*导航部分*/
function changeNav(){
	var home = document.getElementById("home");
	home.style.borderBottom = "solid 1px #000";
	home.style.borderLeft =  "none";
	home.style.borderTop =  "none";
	home.style.borderRight =  "none";
}
function changeNavOut(){
	var home = document.getElementById("home");
	home.style.borderBottom = "none";
	home.style.borderLeft =  "solid 1px #000";
	home.style.borderTop =  "solid 1px #000";
	home.style.borderRight =  "solid 1px #000";
}

