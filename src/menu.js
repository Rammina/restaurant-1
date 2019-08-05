import '!style-loader!css-loader!./menu.css';

import BrickMenuBg from './images/brick-menu-bg.png';

class Menu {
	render(){
		let menuSection = document.createElement("section");
		menuSection.style.background = `url(${BrickMenuBg})`;
		menuSection.style.backgroundSize = 'cover';
		// menuSection.classList.add("slider-section");
		menuSection.id = "menu-container";
		menuSection.insertAdjacentHTML("beforeend", `
				<div id="menu-content">
                	<h1 id="menu-header">Menu</h1>
                    <p id="menu-paragraph">goodbye to drugs, embrace pizza</p>
                    <div id="menu-flex-container">
	<div class="menu-category">
		<h2 class="menu-category-header">Pizza</h2>
		<ul class="menu-food-items">
			<li class="menu-food-item">Gold Experience</li>
			<li class="menu-food-item">Gold Experience Requiem</li>
			<li class="menu-food-item">Golden Wind</li>
			<li class="menu-food-item">Sticky Fingers</li>
			<li class="menu-food-item">King Crimson</li>
		</ul>
	</div>
	<div class="menu-category">
		<h2 class="menu-category-header">Pasta</h2>
		<ul class="menu-food-items">
			<li class="menu-food-item">Spaghetti Nero</li>
			<li class="menu-food-item">Spaghetti aglio e olio</li>
			<li class="menu-food-item">Pasta Italiano</li>
			<li class="menu-food-item">Pasta Mediterranean</li>
			<li class="menu-food-item">Pasta Napolitana</li>
			
		</ul>
		
	</div>
	<div class="menu-category">
		<h2 class="menu-category-header">Cocktail</h2>
		<ul class="menu-food-items">
			<li class="menu-food-item">Moody Blues</li>
			<li class="menu-food-item">Purple Haze</li>
			<li class="menu-food-item">The Grateful Dead</li>
			<li class="menu-food-item">White Album</li>
			<li class="menu-food-item">Sex Pistols</li>
			
		</ul>
		
	</div>
</div>

	            </div>
		`);
		document.querySelector("main").appendChild(menuSection);
		// Make the navigation bar opaque
		document.querySelector(".main-header").classList.add("opaque");
	}
	remove(){
		let menuSection = document.getElementById("menu-container");
		menuSection.parentElement.removeChild(menuSection);
	}
}

export default Menu;
