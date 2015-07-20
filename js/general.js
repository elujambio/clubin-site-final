var navbarMenu = document.getElementById("navbarMenu");
var menuSpritesheet = document.getElementById("menuSpritesheet");
var menu = document.getElementById("menu");
var toggle = 1;

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