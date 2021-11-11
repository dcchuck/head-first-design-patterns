/**
 * The Decorator Pattern
 *
 * The Decorator Pattern attaches additional responsibilties to an object
 * dynamically. Decorators provide a flexible alternative to subclassing for
 * extending functionality.
 */

abstract class Beverage {
  abstract cost(): number;
  description = 'Unknown Beverage';

  public getDescription() {
    return this.description;
  }
}

abstract class CondimentDecorator extends Beverage {
  abstract getDescription(): string;
}

class Espresso extends Beverage {
  constructor() {
    super();
    this.description = 'Espresso';
  }

  public cost() {
    return 1.99;
  }
}

class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = 'House Blend Coffee';
  }

  public cost() {
    return 0.89;
  }
}

class DarkRoast extends Beverage {
  constructor() {
    super();
    this.description = 'Dark Roast Coffee';
  }

  public cost() {
    return 1.19;
  }
}

class Mocha extends CondimentDecorator {
  private beverage: Beverage;

  constructor(b: Beverage) {
    super();
    this.beverage = b;
  }

  getDescription() {
    return this.beverage.getDescription() + ', Mocha';
  }
  public cost() {
    return this.beverage.cost() + 0.2;
  }
}

class Whip extends CondimentDecorator {
  private beverage: Beverage;

  constructor(b: Beverage) {
    super();
    this.beverage = b;
  }

  getDescription() {
    return this.beverage.getDescription() + ', Whip';
  }
  public cost() {
    return this.beverage.cost() + 0.25;
  }
}

class Soy extends CondimentDecorator {
  private beverage: Beverage;

  constructor(b: Beverage) {
    super();
    this.beverage = b;
  }

  getDescription() {
    return this.beverage.getDescription() + ', Soy';
  }
  public cost() {
    return this.beverage.cost() + 0.45;
  }
}

const exampleOne = (): void => {
  function printBeverage(b: Beverage) {
    console.log(`${b.getDescription()} $${b.cost()}`);
  }
  const beverage = new Espresso();
  printBeverage(beverage);

  let beverage2 = new DarkRoast();
  beverage2 = new Mocha(beverage2);
  beverage2 = new Mocha(beverage2);
  beverage2 = new Whip(beverage2);
  printBeverage(beverage2);

  let beverage3 = new HouseBlend();
  beverage3 = new Soy(beverage3);
  beverage3 = new Mocha(beverage3);
  beverage3 = new Whip(beverage3);
  printBeverage(beverage3);
};

export default {exampleOne};
