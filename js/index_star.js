/*导航部分*/
function changeNav(){
	var star = document.getElementById("star");
	star.style.borderBottom = "solid 1px #000";
	star.style.borderLeft =  "none";
	star.style.borderTop =  "none";
	star.style.borderRight =  "none";
	star.style.width = "100%";
}
function changeNavOut(){
	var star = document.getElementById("star");
	star.style.borderBottom = "none";
	star.style.borderLeft =  "solid 1px #000";
	star.style.borderTop =  "solid 1px #000";
	star.style.borderRight =  "solid 1px #000";
	star.style.width = "98%";
	
}