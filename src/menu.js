import margheritaImage from './assets/images/margherita.png';
import hawaiianImage from './assets/images/hawaiian.png';
import veggieImage from './assets/images/veggie.png';
import cheeseImage from './assets/images/cheese.png';
import pepperoniImage from './assets/images/pepperoni.png';

class Menu {
  getMenu() {
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
    this.grid = document.createElement("div"); // ← for layout

    this.menuList = [
      { name: "Margherita", description: "Classic with tomato, mozzarella, and basil.", image: margheritaImage },
      { name: "Pepperoni", description: "Loaded with pepperoni and cheese.", image: pepperoniImage },
      { name: "Veggie Delight", description: "A garden mix of fresh vegetables.", image: veggieImage },
      { name: "Four Cheese", description: "Mozzarella, parmesan, gorgonzola, and goat cheese.", image: cheeseImage },
      { name: "Hawaiian", description: "Ham, pineapple, and melty cheese.", image: hawaiianImage }
    ];

    this.items = this.menuList.map(pizza => {
      const item = document.createElement("div");
      const name = document.createElement("h3");
      const desc = document.createElement("p");
      const img = document.createElement("img");

      name.textContent = pizza.name;
      desc.textContent = pizza.description;
      img.src = pizza.image;
      img.alt = pizza.name;
      img.classList.add("menu-image");

      item.appendChild(img);
      item.appendChild(name);
      item.appendChild(desc);
      return item;
    });
  }

  setClasses() {
    this.section.classList.add("section");
    this.container.classList.add("menu-container");
    this.title.classList.add("menu-title");
    this.grid.classList.add("menu-grid");

    this.items.forEach(item => {
      item.classList.add("slider-item", "box");
      item.querySelector("h3").classList.add("pizza-title");
      item.querySelector("p").classList.add("description");
    });
  }

  setAttributes() {
    this.title.textContent = "Our Pizza Menu";
  }

  bindNodes() {
    this.section.appendChild(this.container);
    this.container.appendChild(this.title);
    this.container.appendChild(this.grid);
    this.items.forEach(item => {
      this.grid.appendChild(item);
    });
  }
}

export default function getMenu() {
  const menu = new Menu();
  return menu.getMenu();
}
