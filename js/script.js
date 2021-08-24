var f1 = document.getElementById("f1");
var f2 = document.getElementById("f2");
var f3 = document.getElementById("f3");
var f4 = document.getElementById("f4");
var f5 = document.getElementById("f5");
var f6 = document.getElementById("f6");
var f7 = document.getElementById("f7");
var f8 = document.getElementById("f8");
var f9 = document.getElementById("f9");
var f10 = document.getElementById("f10");

function initParallax(){
	f1.style.left = ((window.pageYOffset/17)-300) + "px";
	f2.style.left = ((window.pageYOffset/16)-250) + "px";
	f3.style.right = ((window.pageYOffset/16)-600) + "px";
	f4.style.left = ((window.pageYOffset/17)-350) + "px";
	f5.style.left = ((window.pageYOffset/17)-2000) + "px";
	f6.style.left = ((window.pageYOffset/15)-170) + "px";
	f6.style.bottom = ((window.pageYOffset/15)-200) + "px";
	f7.style.left = ((window.pageYOffset/15)-90) + "px";
	f7.style.bottom = ((window.pageYOffset/19)-380) + "px";
	f8.style.left = ((window.pageYOffset/13)-2500) + "px";
	f9.style.left = ((window.pageYOffset/18)-290) + "px";
	f9.style.bottom = ((window.pageYOffset/19)-400) + "px";
	f10.style.right = ((window.pageYOffset/19)-400) + "px";			

}

window.addEventListener("scroll", initParallax);