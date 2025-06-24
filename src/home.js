import pizzaImage from './assets/images/pizza.png';

class Home {
  getHome() {
    this.createElements();
    this.setClasses();
    this.setAttributes();
    this.bindNodes();
    return this.section;
  }

  createElements() {
    this.section = document.createElement("main");
    this.heroBody = document.createElement("div");
    this.columns = document.createElement("div");
    this.column1 = document.createElement("div");
    this.column2 = document.createElement("div");

    // New wrapper for centering title, img, subtitle together
    this.wrapper = document.createElement("div");

    this.title = document.createElement("p");
    this.subtitle = document.createElement("p");
    this.img = document.createElement("img");
  }

  setClasses() {
    this.section.classList.add("hero");
    this.heroBody.classList.add("hero-body");
    this.columns.classList.add("columns");
    this.column1.classList.add("column");
    this.column2.classList.add("column");

    this.wrapper.classList.add("wrapper");
    this.img.classList.add("is-rounded");
    this.title.classList.add("title", "is-size-1");
    this.subtitle.classList.add("subtitle", "mt-3");
  }

  setAttributes() {
    this.img.src = pizzaImage;
    this.img.alt = "pizza man";
    this.title.innerHTML = "Welcome<br>to<br>Paradise!";
    this.subtitle.textContent = "Fresh from the oven to your heart.";
  }

  bindNodes() {
    this.section.appendChild(this.heroBody);
    this.heroBody.appendChild(this.columns);
    this.columns.appendChild(this.column1);
    this.columns.appendChild(this.column2);

    // All content is added into wrapper
    this.wrapper.appendChild(this.title);
    this.wrapper.appendChild(this.img);
    this.wrapper.appendChild(this.subtitle);

    // Wrapper goes into the column
    this.column1.appendChild(this.wrapper);
  }
}

export default function getHome() {
  const home = new Home();
  return home.getHome();
}

