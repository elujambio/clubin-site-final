var navbarMenu = document.getElementById("navbarMenu");
var menuSpritesheet = document.getElementById("menuSpritesheet");
var menu = document.getElementById("menu");
var oneThree = document.getElementById("oneThree");
var toggle = 1;
var body = document.getElementsByTagName("body");
var glyphSmall = document.getElementById("glyphSmall");
navbarMenu.addEventListener("click", toggleMenu);

function toggleMenu(){
	if(toggle==0){
		menu.style.transition= "opacity .3s";
		menu.style.opacity=0;
		menu.style.pointerEvents="none";
		menuSpritesheet.style.animation="back .2s steps(10) forwards";
		toggle=1;
	}else{
		menu.style.transition= "opacity .3s";
		menu.style.opacity=1;
		menu.style.pointerEvents="all";
		menuSpritesheet.style.animation="forth .2s steps(10) forwards";
		toggle=0;
	}
}

body[0].onload=function(){
	oneThree.className = oneThree.className + " show";
	oneOne.style.opacity = "1";
	oneOne.style.transition = "opacity 2s ease";	
	oneTwo.style.opacity = "1";
	oneTwo.style.transition = "opacity 4s ease";

};


// function scrollHandler(){
// 	// if(window.pageYOffset >= document.clientHeight - 100){
// 	// 	glyphSmall.style.fill = "#cdb378";
// 	// }
//     if(window.pageYOffset >= (one.clientHeight - one.offsetTop - navbar.clientHeight)){
//     	counter++;
//     }
//     if(window.pageYOffset <= (one.clientHeight - one.offsetTop - navbar.clientHeight)){
//     	counter--;
//     }
//     if(counter>0  && counter<2){
//     	glyphSmall.style.fill = "#cdb378";
//     	glyphSmall.style.transition = "fill .4s ease";
//     	menuSpritesheet.src="img/clubin-menu-dark.svg";
//     }
//     if(counter<0 && counter>-2){
//     	glyphSmall.style.fill = "url(#gradient)";
//     	glyphSmall.style.transition = "fill .4s ease";
//     	menuSpritesheet.src="img/clubin-menu.svg";    
//     }    	
// }
// window.onscroll = scrollHandler;
// body[0].addEventListener("scroll", scrollHandler);

var didScroll = false;

window.onscroll = doThisStuffOnScroll;

function doThisStuffOnScroll() {
    didScroll = true;
}

setInterval(function() {
    if(didScroll==true) {
    var counter = 0;
    if(window.pageYOffset >= (one.clientHeight - one.offsetTop - navbar.clientHeight)){
    	counter++;
    }
    if(window.pageYOffset <= (one.clientHeight - one.offsetTop - navbar.clientHeight)){
    	counter--;
    }

    if(counter>0  && counter<2){
    	glyphSmall.style.fill = "#cdb378";
    	menuSpritesheet.src="img/clubin-menu-dark.svg";
    	menu.style.transition = "color .4s ease";
    	menu.style.transition = "background-color .4s ease";  
    	menu.style.color= "#cdb378";
    	menu.style.backgroundColor= "#f5f5f5";    	

    }
    if(counter<0 && counter>-2){
    	glyphSmall.style.fill = "url(#gradient)";
    	menuSpritesheet.src="img/clubin-menu.svg";    
    	menu.style.transition = "color .4s ease";
    	menu.style.transition= "background-color .4s ease";  
    	menu.style.color= "#faeebc";
    	menu.style.backgroundColor = "#090910";  
    }    	    	
        didScroll = false;
        console.log('You scrolled');
    }
}, 100);