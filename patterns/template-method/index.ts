
/**
 * The Template Method Pattern
 *
 * The Template Method Pattern defines the skeleton of an algorithm in a method,
 * deferring some steps to subclasses. Template Method lets subclasses redefine
 * certain steps of an algorithm without changing the algorithm's structure.
 */

class BadCoffee {
  prepareRecipe() {
    this.boilWater();
    this.brewCoffeeGrind();
    this.pourInCup();
    this.addSugarAndMilk();
  }

  boilWater() {}
  brewCoffeeGrind() {}
  pourInCup() {}
  addSugarAndMilk() {}
}

class BadTea {
  prepareRecipe() {
    this.boilWater();
    this.steepTheTeabag();
    this.pourInCup();
    this.addLemon();
  }

  boilWater() {}
  steepTheTeabag() {}
  pourInCup() {}
  addLemon() {}
}

abstract class CaffeineBeverage {
  /**
   * This is what's known as a template method
   */
  prepareRecipe() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }
  boilWater() { console.log('Boil! That! Water!'); }
  pourInCup() { console.log('In! The! Cup!'); }

  abstract brew: () => void;
  abstract addCondiments: () => void;
}

class Coffee extends CaffeineBeverage {
  brew = () => { console.log('In a pot!') }
  addCondiments = () => { console.log('Add those condiments!') }
}

class Tea extends CaffeineBeverage {
  brew = () => { console.log('In a kettle?!') }
  addCondiments = () => { console.log('Add those condiments! But tea.') }
}

abstract class CaffeineBeverageWithHook {
  /**
   * This is what's known as a template method
   */
  prepareRecipe() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (this.customerWantsCondiments()) {
      this.addCondiments();
    }
  }
  boilWater() { console.log('Boil! That! Water!'); }
  pourInCup() { console.log('In! The! Cup!'); }
  customerWantsCondiments() { return true }

  abstract brew: () => void;
  abstract addCondiments: () => void;
}

class CoffeeWithHook extends CaffeineBeverageWithHook {
  brew = () => { console.log('In a pot!') }
  addCondiments = () => { console.log('Add those condiments!') }

  /*
   * We are just manually overwriting the call here, for getting the user input
   * wrapping the readline call in a promise will let you write a nice async
   * function TODO
   */
  customerWantsCondiments() {
    return false;
  }
}

function exampleOne() {
  const coffee = new Coffee();
  const hookedCoffee = new CoffeeWithHook();
  coffee.prepareRecipe();
  hookedCoffee.prepareRecipe();
}

/**
 * The text makes reference to Java's approach to sorting arrays.
 *
 * Each element implements a `compateTo` function. I'll mock up something
 * similar here
 */


interface IValued {
  value: number;
}

interface IComparable<T extends IValued> {
  compareTo: (e: T) => number;
}

interface IValueNom {
  value: number;
}

class Clown implements IComparable<IValueNom> {
  value: number;

  constructor(v: number) {
    this.value = v;
  }

  compareTo(e: IValueNom) {
    return this.value - e.value;
  }
}


export default { exampleOne }
