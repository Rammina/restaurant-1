// Import JS files
import './shared.js';
import Navigation from './nav.js';
import Home from './home.js';
import Menu from './menu.js';
import Contact from './contact.js';


let navigation = new Navigation();
let home = new Home();
let menu = new Menu();
let contact = new Contact();

navigation.render();
home.render();

// menu.render();
// contact.render();

let navItems = document.getElementsByClassName("nav-item");
for (let item of navItems){
	item.addEventListener("click", function(event){
		for(let i = 0; i < navItems.length; i++) {
			if(navItems[i] === event.target) {
				switch (i){
					case 0:
						// Check if home container exists
						if(!(document.getElementById("home-container"))) {
						 // check the other containers if they exist and remove them
							 // afterwards, Render the section
							if(!!(document.getElementById("menu-container"))) {
								menu.remove();
							}
							if(!!(document.getElementById("contact-container"))) {
								contact.remove();
							}
						 	home.render();
						}
						break;
					case 1:
						// check if menu container exists
						if(!(document.getElementById("menu-container"))) {
						 // check the other containers if they exist and remove them
							 // afterwards, Render the section
							if(!!(document.getElementById("home-container"))) {
								home.remove();
							}
							if(!!(document.getElementById("contact-container"))) {
								contact.remove();
							}
						 	menu.render();
						}
						break;
					case 2:
						// check if contact container exists
						if(!(document.getElementById("contact-container"))) {
						 // check the other containers if they exist and remove them
							 // afterwards, Render the section
							if(!!(document.getElementById("menu-container"))) {
								menu.remove();
							}
							if(!!(document.getElementById("home-container"))) {
								home.remove();
							}
						 	contact.render();
						}
						break;
				}
			}
		}
	});
}

document.getElementById("nav-title").addEventListener("click", function(){
	if(!(document.getElementById("home-container"))) {
		// check the other containers if they exist and remove them
		// afterwards, Render the section
		if(!!(document.getElementById("menu-container"))) {
			menu.remove();
		}
		if(!!(document.getElementById("contact-container"))) {
			contact.remove();
		}
		home.render();
	}	
});