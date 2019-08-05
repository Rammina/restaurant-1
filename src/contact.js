import '!style-loader!css-loader!./contact.css';

class Contact {
	render(){
		let contactSection = document.createElement("section");
		// contactSection.classList.add("slider-section");
		contactSection.id = "contact-container";
		contactSection.insertAdjacentHTML("beforeend", `
				<div id="contact-content">
                	<div id="contact-text">
                    	<h1 id="contact-header">We'd Like to Hear From You!</h1>
                    	<p id="contact-paragraph">Giorno has a dream, and it is to give you the best customer experience!</p>
	                    <div id="contact-flex-container">
			<div class="contact-flex-item">
				<!-- This needs an image -->
				
				<span id="contact-item-number">+666-6969-6969</span>
			</div>
			<div class="contact-flex-item">
				<!-- This needs an image -->
				
				<span id="contact-item-number">giornohasadream@gmail.com</span>
			</div>
</div>
                	</div>
	            </div>
		`);
		document.querySelector("main").appendChild(contactSection);

		// make the navigation bar opaque
		document.querySelector(".main-header").classList.add("opaque");
	}
	remove(){
		let contactSection = document.getElementById("contact-container");
		contactSection.parentElement.removeChild(contactSection);
	}
}

export default Contact;