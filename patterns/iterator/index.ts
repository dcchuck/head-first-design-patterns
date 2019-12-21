/**
 * The Iterator Pattern
 *
 * The Iterator Pattern provides a way to access the elements of an aggregate
 * object sequentially without exposing its underlying representation.
 */

// Following along with the text, notice I'm naming the interface IIterator.
// 1) Stylistically, this is what I've been doing BUT
// 2) There already is an Iterator! So we need a unique name.
interface IIterator<T> {
  hasNext: () => boolean;
  next: () => T;
}

class MenuItem {
  name: string;
  description: string;
  vegetarian: boolean;
  price: number;
  constructor(name: string, description: string, vegetarian: boolean, price: number) {
    this.name = name;
    this.description = description;
    this.vegetarian = vegetarian;
    this.price = price;
  }

  getName() { return this.name };
  getDescription() { return this.description; }
  getPrice() { return this.price; }
  isVegetarian() { return this.isVegetarian; }
}

class DinnerMenuIterator implements IIterator<MenuItem> {
  items: MenuItem[];
  position = 0;

  constructor(items: MenuItem[]) {
    this.items = items;
  }

  next() {
    const menuItem = this.items[this.position];
    this.position = this.position + 1;
    return menuItem;
  }

  // No need for the if/else here
  hasNext() {
    return !((this.position >= this.items.length) || (this.items[this.position] == null))
  }
}

class DinnerMenu {
  menuItems: MenuItem[];
  numberOfItems = 0;

  constructor() {
    this.menuItems = [];

    this.addItem("Tasty Burger", "It is a tasty burger!", false, 23.99);
    this.addItem("Veggie Burger", "It is a veggie burger!", true, 33.99);
    this.addItem("General Tso's Chicken", "From the good", false, 45.00);
    this.addItem("Beef Pot Pie", "A flavor sensation that will send you to the moon!", false, 3.99);
  }

  addItem(name: string, description: string, vegetarian: boolean, price: number) {
    const menuItem = new MenuItem(name, description, vegetarian, price);
    this.menuItems.push(menuItem);
  }

  createIterator(): DinnerMenuIterator {
    return new DinnerMenuIterator(this.menuItems);
  }
}

class Waitress {
  dinnerMenu: DinnerMenu;

  constructor(dinnerMenu: DinnerMenu) {
    this.dinnerMenu = dinnerMenu;
  }

  printMenu() {
    const dinnerIterator = this.dinnerMenu.createIterator();
    this.printMenuIter(dinnerIterator);
  }

  // No method overloading here
  private printMenuIter(iter: DinnerMenuIterator) {
    while (iter.hasNext()) {
      const menuItem = iter.next();
      console.log(`${menuItem.getName()}, ${menuItem.getPrice()} -- ${menuItem.getDescription()}`);
    }
  }
}

function exampleOne() {
  const dinnerMenu = new DinnerMenu();
  const waitress = new Waitress(dinnerMenu);
  waitress.printMenu();
}

export default { exampleOne }
