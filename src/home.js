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
		homeSection.style.backgroundRepeat = 'no-repeat';
		homeSection.style.backgroundPosition = '50% 0%';
		// homeSection.classList.add("slider-section");
		homeSection.id = "home-container";
		homeSection.insertAdjacentHTML("beforeend", `
				<div id="home-content">
                	<div id="home-text">
                    	<h1 id="home-header"><span id="home-header-break">Authentic </span>Italian Pizza</h1>
                    	<p id="home-paragraph">We dream to serve only the best food to our customers!</p>
	                    <button id="home-button">View Menu</button>
                	</div>
	            </div>
		`);
		homeSection.style.display = "block";
		document.querySelector("main").appendChild(homeSection);
		document.getElementById("home-button").addEventListener("click", function(){
			if(!(document.getElementById("menu-container"))) {
				// check the other containers if they exist and remove them
				// afterwards, Render the section
				if(!!(document.getElementById("home-container"))) {
					let homeSection = document.getElementById("home-container");
					homeSection.parentElement.removeChild(homeSection);
					// homeSection.style.display = "none";
					console.log("home remove Activated");
				}
				if(!!(document.getElementById("contact-container"))) {
					contact.remove();
				}
				menu.render();
			}
		});

		// make the navigation bar transparent
		document.querySelector(".main-header").classList.remove("opaque");
	}
	remove(){
		let homeSection = document.getElementById("home-container");
		homeSection.parentElement.removeChild(homeSection);
		// homeSection.style.display = "none";
		console.log("home remove Activated");
	}
}

export default Home;
