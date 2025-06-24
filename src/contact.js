class Contact {
  getContact() {
    this.createElements();
    this.setClasses();
    this.setAttributes();
    this.bindNodes();
    return this.section;
  }

  createElements() {
    this.section = document.createElement("main");
    this.container = document.createElement("div");
    this.title = document.createElement("h2");
    this.description = document.createElement("p");

    this.form = document.createElement("form");

    this.nameField = document.createElement("input");
    this.emailField = document.createElement("input");
    this.messageField = document.createElement("textarea");
    this.submitButton = document.createElement("button");

    this.address = document.createElement("div");
    this.phone = document.createElement("p");
    this.hours = document.createElement("p");
  }

 setClasses() {
    this.section.classList.add("contact-section");
    this.container.classList.add("container");
    this.title.classList.add("contact-title");
    this.description.classList.add("contact-subtitle");

    this.form.classList.add("contact-form");

    this.nameField.classList.add("contact-input");
    this.emailField.classList.add("contact-input");
    this.messageField.classList.add("contact-textarea");
    this.submitButton.classList.add("contact-submit");

    this.address.classList.add("contact-info");
    this.phone.classList.add("contact-info-line");
    this.hours.classList.add("contact-info-line");
    }

  setAttributes() {
    this.title.textContent = "Contact Us";
    this.description.textContent = "Got a question? Want to order over the phone? We’d love to hear from you!";

    this.nameField.placeholder = "Your Name";
    this.emailField.placeholder = "Your Email";
    this.messageField.placeholder = "Your Message";

    this.submitButton.type = "submit";
    this.submitButton.textContent = "Send Message";

    this.phone.textContent = "📞 Phone: (123) 456-7890";
    this.hours.textContent = "🕐 Hours: Mon–Sun, 11am–11pm";
    this.address.innerHTML = `<p>📍 Address: 123 Pizza Street, Mozzarella City</p>`;
  }

  bindNodes() {
    this.section.appendChild(this.container);
    this.container.appendChild(this.title);
    this.container.appendChild(this.description);

    this.form.appendChild(this.nameField);
    this.form.appendChild(this.emailField);
    this.form.appendChild(this.messageField);
    this.form.appendChild(this.submitButton);
    this.container.appendChild(this.form);

    this.address.appendChild(this.phone);
    this.address.appendChild(this.hours);
    this.container.appendChild(this.address);
  }
}

export default function getContact() {
  const contact = new Contact();
  return contact.getContact();
}

