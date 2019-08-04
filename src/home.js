import '!style-loader!css-loader!./home.css';

import PizzaHomeBg from './images/pizza-home-bg.png';
import Menu from './menu.js';
import Contact from './contact.js';



let menu = new Menu();
let contact = new Contact();

class Home {
	render(){
		let homeSection = document.createElement("section");
		homeSection.style.background = `url(${PizzaHomeBg})`;
		homeSection.style.backgroundSize = 'cover';
		// homeSection.classList.add("slider-section");
		homeSection.id = "home-container";
		homeSection.insertAdjacentHTML("beforeend", `
				<div id="home-content">
                	<div id="home-text">
                    	<h1 id="home-header">Authentic Italian Pizza</h1>
                    	<p id="home-paragraph">goodbye to drugs, embrace pizza</p>
	                    <button id="home-button">Check our Menu</button>
                	</div>
	            </div>
		`);
		document.querySelector("main").appendChild(homeSection);
		document.getElementById("home-button").addEventListener("click", function(){
			if(!(document.getElementById("menu-container"))) {
				// check the other containers if they exist and remove them
				// afterwards, Render the section
				if(!!(document.getElementById("home-container"))) {
					let homeSection = document.getElementById("home-container");
					homeSection.parentElement.removeChild(homeSection);
					console.log("home remove Activated");
				}
				if(!!(document.getElementById("contact-container"))) {
					contact.remove();
				}
				menu.render();
			}
		});


	}
	remove(){
		let homeSection = document.getElementById("home-container");
		homeSection.parentElement.removeChild(homeSection);
		console.log("home remove Activated");
	}
}

export default Home;
