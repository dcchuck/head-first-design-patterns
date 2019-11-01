/**
 * Abstract Classes
 */
abstract class Pizza {
  abstract name: string;
  abstract dough: string;
  abstract sauce: string;
  toppings: string[];

  constructor() {
    this.toppings = [];
  }

  prepare() {
    console.log(`Preparing ${this.name}`);
    console.log('Tossing dough!');
    console.log('Adding sauce...');
    console.log('Adding toppings: ');
    for (let topping of this.toppings) {
      console.log(`  ${topping}`);
    }
  }

  bake() {
    console.log('Bake for 25 minutes at 350');
  }

  cut() {
    console.log('Cutting the pizza into diagonal slices');
  }

  box() {
    console.log('Place the pizza in official PizzaStore box');
  }

  getName(): string {
    return this.name;
  }
}

abstract class PizzaStore {
  orderPizza(pizzaType: string): Pizza {
    const pizza = this.createPizza(pizzaType);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }

  protected abstract createPizza(t: string): Pizza
}

class NyStyleCheesePizza extends Pizza {
  name = 'NY Style Sauce and Cheese Pizza';
  dough = 'Thin Crust Dough';
  sauce = 'Marinara Sauce';
  constructor() {
    super();
    this.toppings.push('Grated Reggiano Cheese');
  }
}

class NyStylePepperoniPizza extends Pizza {
  name = 'NY Style Pepperoni Pizza';
  dough = 'Thin Crust Dough';
  sauce = 'Marinara Sauce';
  constructor() {
    super();
    this.toppings.push('Grated Reggiano Cheese');
    this.toppings.push('Pepperoni');
  }
}

class ChicagoStyleCheesePizza extends Pizza {
  name = 'Chicago Style Deep Dish Cheese Pizza';
  dough = 'Extra Thick Crust Dough';
  sauce = 'Plum Tomato Sauce';
  constructor() {
    super();
    this.toppings.push('Shredded Mozzarella Cheese');
  }

  cut() {
    console.log('Cutting the pizza into square slices');
  }
}

class ChicagoStylePepperoniPizza extends Pizza {
  name = 'Chicago Style Deep Dish Pepperoni Pizza';
  dough = 'Extra Thick Crust Dough';
  sauce = 'Plum Tomato Sauce';
  constructor() {
    super();
    this.toppings.push('Shredded Mozzarella Cheese');
    this.toppings.push('Pepperoni');
  }

  cut() {
    console.log('Cutting the pizza into square slices');
  }
}

class NyStylePizzaStore extends PizzaStore {
  createPizza(t: string) {
    if (t === 'cheese') {
      return new NyStyleCheesePizza();
    } else if (t === 'pepperoni') {
      return new NyStylePepperoniPizza();
    } else {
      /**
       * The code in the book optionally return null here. If my googling
       * serves me correctly, an unmatched string would throw a Null Pointer
       * Exception in this case.
       *
       * As the purpose of this exercise is discovering the design patterns,
       * consider this just a friendly observation in support of typescript.
       *
       * So if you don't know what kind of pizza you want you best believe I'm
       * going to just give you cheese.
       */
      return new NyStyleCheesePizza();
    }
  }
}

class ChicagoStylePizzaStore extends PizzaStore {
  createPizza(t: string) {
    if (t === 'cheese') {
      return new ChicagoStyleCheesePizza();
    } else if (t === 'pepperoni') {
      return new ChicagoStylePepperoniPizza();
    } else {
      return new ChicagoStyleCheesePizza();
    }
  }
}

const exampleOne = () => {
  const nyStore = new NyStylePizzaStore();
  const chicagoStore = new ChicagoStylePizzaStore();

  let pizza = nyStore.orderPizza('cheese');
  console.log(`Ethan orderd a ${pizza.getName()}`);
  pizza = chicagoStore.orderPizza('pepperoni');
  console.log(`Joel orderd a ${pizza.getName()}`);
}

export default {
  exampleOne,
}
