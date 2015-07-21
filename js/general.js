var navbarMenu = document.getElementById("navbarMenu");
var menuSpritesheet = document.getElementById("menuSpritesheet");
var menu = document.getElementById("menu");
var oneThreeImg = document.querySelector("#oneThree img");
var toggle = 1;
var body = document.getElementsByTagName("body");
var glyphSmall = document.getElementById("glyphSmall");
navbarMenu.addEventListener("click", toggleMenu);

function toggleMenu(){
	if(toggle==0){
		menu.style.opacity=0;
		menu.style.pointerEvents="none";
		menuSpritesheet.style.animation="back .2s steps(10) forwards";
		toggle=1;
	}else{
		menu.style.opacity=1;
		menu.style.pointerEvents="all";
		menuSpritesheet.style.animation="forth .2s steps(10) forwards";
		toggle=0;
	}
}

body[0].onload=function(){
	oneThreeImg.className = oneThreeImg.className + " show"; 
};

function scrollHandler(){
	// if(window.pageYOffset >= document.clientHeight - 100){
	// 	glyphSmall.style.fill = "#cdb378";
	// }
	var counter = 0;
    if(window.pageYOffset >= (one.clientHeight - one.offsetTop - navbar.clientHeight)){
    	counter++;
    }
    if(window.pageYOffset <= (one.clientHeight - one.offsetTop - navbar.clientHeight)){
    	counter--;
    }
    if(counter>0  && counter<2){
    	glyphSmall.style.fill = "#cdb378";
    	glyphSmall.style.transition = "fill .4s ease";
    	menuSpritesheet.src="img/clubin-menu-dark.svg";
    }
    if(counter<0 && counter>-2){
    	glyphSmall.style.fill = "url(#gradient)";
    	glyphSmall.style.transition = "fill .4s ease";
    	menuSpritesheet.src="img/clubin-menu.svg";    
    }    	
}
window.onscroll = scrollHandler;
// body[0].addEventListener("scroll", scrollHandler);