import '!style-loader!css-loader!./menu.css';

class Menu {
	render(){
		let menuSection = document.createElement("section");
		// menuSection.classList.add("slider-section");
		menuSection.id = "menu-container";
		menuSection.insertAdjacentHTML("beforeend", `
				<div id="menu-content">
                	<h1 id="menu-header">Menu</h1>
                    <p id="menu-paragraph">goodbye to drugs, embrace pizza</p>
                    
	            </div>
		`);
		document.querySelector("main").appendChild(menuSection);
	}
	remove(){
		let menuSection = document.getElementById("menu-container");
		menuSection.parentElement.removeChild(menuSection);
	}
}

export default Menu;