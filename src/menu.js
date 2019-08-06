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
                    <div id="menu-flex-container">
						<div class="menu-category">
							<h2 class="menu-category-header">Pizza</h2>
							<ul class="menu-food-items">
								<li class="menu-food-item">Gold Experience <span class="menu-food-price">$20</span></li>
								<li class="menu-food-item">Aerosmith <span class="menu-food-price">$20</span></li>
								<li class="menu-food-item">Golden Wind<span class="menu-food-price">$20</span></li>
								<li class="menu-food-item">Sticky Fingers<span class="menu-food-price">$20</span></li>
								<li class="menu-food-item">King Crimson<span class="menu-food-price">$20</span></li>
							</ul>
						</div>
						<div class="menu-category">
							<h2 class="menu-category-header">Pasta</h2>
							<ul class="menu-food-items">
								<li class="menu-food-item">Spaghetti Nero<span class="menu-food-price">$20</span></li>
								<li class="menu-food-item">Spaghetti aglio e olio<span class="menu-food-price">$20</span></li>
								<li class="menu-food-item">Pasta Italiano<span class="menu-food-price">$20</span></li>
								<li class="menu-food-item">Pasta Mediterranean<span class="menu-food-price">$20</span></li>
								<li class="menu-food-item">Pasta Napolitana<span class="menu-food-price">$20</span></li>
								
							</ul>
							
						</div>
						<div class="menu-category">
							<h2 class="menu-category-header">Cocktail</h2>
							<ul class="menu-food-items">
								<li class="menu-food-item">Moody Blues<span class="menu-food-price">$20</span></li>
								<li class="menu-food-item">Purple Haze<span class="menu-food-price">$20</span></li>
								<li class="menu-food-item">The Grateful Dead<span class="menu-food-price">$20</span></li>
								<li class="menu-food-item">White Album<span class="menu-food-price">$20</span></li>
								<li class="menu-food-item">Sex Pistols<span class="menu-food-price">$20</span></li>
								
							</ul>
							
						</div>
						<div class="menu-category">
							<h2 class="menu-category-header">Pizza</h2>
							<ul class="menu-food-items">
								<li class="menu-food-item">Gold Experience<span class="menu-food-price">$20</span></li>
								<li class="menu-food-item">Aerosmith<span class="menu-food-price">$20</span></li>
								<li class="menu-food-item">Golden Wind<span class="menu-food-price">$20</span></li>
								<li class="menu-food-item">Sticky Fingers<span class="menu-food-price">$20</span></li>
								<li class="menu-food-item">King Crimson<span class="menu-food-price">$20</span></li>
							</ul>
						</div>
						<div class="menu-category">
							<h2 class="menu-category-header">Pasta</h2>
							<ul class="menu-food-items">
								<li class="menu-food-item">Spaghetti Nero<span class="menu-food-price">$20</span></li>
								<li class="menu-food-item">Spaghetti aglio e olio<span class="menu-food-price">$20</span></li>
								<li class="menu-food-item">Pasta Italiano<span class="menu-food-price">$20</span></li>
								<li class="menu-food-item">Pasta Mediterranean<span class="menu-food-price">$20</span></li>
								<li class="menu-food-item">Pasta Napolitana<span class="menu-food-price">$20</span></li>
								
							</ul>
							
						</div>
						<div class="menu-category">
							<h2 class="menu-category-header">Cocktail</h2>
							<ul class="menu-food-items">
								<li class="menu-food-item">Moody Blues<span class="menu-food-price">$20</span></li>
								<li class="menu-food-item">Purple Haze<span class="menu-food-price">$20</span></li>
								<li class="menu-food-item">The Grateful Dead<span class="menu-food-price">$20</span></li>
								<li class="menu-food-item">White Album<span class="menu-food-price">$20</span></li>
								<li class="menu-food-item">Sex Pistols<span class="menu-food-price">$20</span></li>
								
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
