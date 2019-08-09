import '!style-loader!css-loader!./nav.css';

import HamburgerIcon from './images/hamburger-icon.png';


class Navigation {
	render(){
		let navbar = document.createElement("header");
		navbar.classList.add("main-header");
		navbar.insertAdjacentHTML("beforeend", `
			<nav class="main-nav">
            <!--  The anchor tag needs to link to the page top-->
            <a href="#" id="nav-title">Giorno</a>

            <button id="nav-menu" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navbarResponsive"></button>
            <div class="backdrop" id="nav-backdrop"></div>
            <ul class="nav-items" id="navbarResponsive">
            	<li><a class="nav-item" href="#">home</a></li>
                <li><a class="nav-item" href="#">menu</a></li>
                <li><a class="nav-item" href="#">contact</a></li>
                
            </ul>
            
            </nav>
		`);
		
		let mainContent = document.querySelector("main");
		document.body.insertBefore(navbar, mainContent);
		// Dom elements of the navigation bar
		let title = document.getElementById("nav-title");
		let menubutton = document.getElementById("nav-menu");
		let navBackdrop = document.getElementById("nav-backdrop");
		let menuitems = document.querySelector(".nav-items");
		let menuitem = document.querySelector(".nav-item");

		menubutton.style.background = `url(${HamburgerIcon})`;
		menubutton.style.backgroundSize = 'cover';
		menubutton.style.backgroundRepeat = 'no-repeat';
		menubutton.style.backgroundPosition = '50% 50%';

		function showMenu() {
			menuitems.classList.add("show");
			menubutton.setAttribute("aria-expanded", "true");
			navBackdrop.classList.add("show");
		}
		
		function hideMenu() { 
			menuitems.classList.remove("show");
			menubutton.setAttribute("aria-expanded", "false");
			navBackdrop.classList.remove("show");
		}

		menubutton.addEventListener("click", function(){
			if((menubutton.getAttribute("aria-expanded")) === "false") {
				showMenu();

				console.log("menu has been shown");
			}
			else{
				hideMenu();
				console.log("menu has been hidden");
			}
		});		

		navBackdrop.addEventListener("click", function(){
				hideMenu();
				console.log("menu has been hidden");
			
		});
	}
	
}

export default Navigation;