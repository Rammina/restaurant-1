import '!style-loader!css-loader!./contact.css';

import EmailIcon from './images/email-icon.png';
import PhoneIcon from './images/phone-icon.png';

class Contact {
	render(){
		let contactSection = document.createElement("section");
		// contactSection.classList.add("slider-section");
		contactSection.id = "contact-container";
		contactSection.insertAdjacentHTML("beforeend", `
				<div id="contact-content">
                	<div id="contact-text">
                    	<h1 id="contact-header">We'd Like to Hear From You!</h1>
                    	<p id="contact-paragraph">Giorno has a dream, and it is to give you the best customer experience! Feel free to contact us via phone, email, or filling out this form below!</p>
	                    <div id="contact-flex-container">
							<div class="contact-flex-item">
								<!-- This needs an image -->
								<div class="contact-image-container"><img class="contact-flex-icon" src="${PhoneIcon}"></img></div>
								<span class="contact-flex-text" id="contact-item-number">+666-6969-6969</span>
							</div>
							<div class="contact-flex-item">
								<!-- This needs an image -->
								<div class="contact-image-container"><img class="contact-flex-icon" src="${EmailIcon}"></img></div>
								<span class="contact-flex-text" id="contact-item-number">giornohasadream@gmail.com</span>
							</div>
						</div>
					</div>
					<div class="contact-form-outer">

                    	<div class="contact-form-container">
                            <div class="contact-form-text">
                              <h2 id="first-contact"><a name="contact" tabindex="-1">Contact Us</a></h2>
                              <form class="contact-form-flex">
                                <div class="contact-field-1">
                                  <input class="contact-text-input default" id="contact-name" type="text" placeholder="Your Name..." maxlength="100" />
                                  <div class="form-error-message" id="name-error">Please input a valid name.</div>
                              <input class="contact-text-input default" id="contact-email" type="email" placeholder="Your Email..." maxlength="254" />
                                  <div class="form-error-message" id="email-error">Please input a valid email address.</div>
                                  <input class="contact-text-input default" id="contact-phone" type="text" placeholder="Your Phone Number..." maxlength="24" />
                                  <div class="form-error-message" id="phone-error">Please input a valid phone number.</div>
                                </div>
                                <div class="contact-field-2">
                                    <textarea class="contact-text-input default" id="contact-message" type="text" maxlength="500" required="required" placeholder="Your Message... (500 character limit)" ></textarea>
                                    <div class="form-error-message" id="message-error">500 character limit reached.</div>
                                </div>
                              </form>
                                    
                                    
                              <input id="contact-submit" type="submit" value="Send Message">
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