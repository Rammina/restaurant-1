import '!style-loader!css-loader!./nav.css';

class Navigation {
	render(){
		let navbar = document.createElement("header");
		navbar.classList.add("main-header");
		navbar.insertAdjacentHTML("beforeend", `
			<nav class="main-nav">
            <!--  The anchor tag needs to link to the page top-->
            <a href="#" id="nav-title">Giorno</a>

            <button id="nav-menu" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navbarResponsive">Menu</button>
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
		let menuitems = document.querySelector(".nav-items");
		let menuitem = document.querySelector(".nav-item");

		function showMenu() {
			menuitems.classList.add("show")
			menubutton.setAttribute("aria-expanded", "true");
		}
		
		function hideMenu() { 
			menuitems.classList.remove("show")
			menubutton.setAttribute("aria-expanded", "false");
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
	}

}

export default Navigation;