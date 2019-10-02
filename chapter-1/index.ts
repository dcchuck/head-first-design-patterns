interface FlyBehavior {
  fly: () => void;
}
interface QuackBehavior {
  quack: () => void;
}

abstract class Duck {
  abstract flyBehavior: FlyBehavior;
  abstract quackBehavior: QuackBehavior;
  abstract display: () => void;

  public performFly() {
    this.flyBehavior.fly();
  }

  public performQuack() {
    this.quackBehavior.quack();
  }

  public swim() {
    console.log("All ducks float, even decoys!");
  }

  public setFlyBehavior(fb: FlyBehavior) {
    this.flyBehavior = fb;
  }

  public setQuackBehavior(qb: QuackBehavior) {
    this.quackBehavior = qb;
  }
}

// Declaring the same interface with a few different syntax approaches
// intentionally here. As the book continues, I will start to enforce more
// and more settings in the compiler.
class FlyWithWings implements FlyBehavior {
  public fly(): void {
    console.log("I'm flying!");
  }
}

class FlyNoWay implements FlyBehavior {
  fly() {
    console.log("I can't fly");
  }
}

class Quack implements QuackBehavior {
  public quack() {
    console.log("Quack");
  }
}

class MuteQuack implements QuackBehavior {
  public quack() {
    console.log("<< Silence >>");
  }
}

class Squeak implements QuackBehavior {
  public quack() {
    console.log("Squeak");
  }
}

class MallardDuck extends Duck {
  flyBehavior = new FlyWithWings();
  quackBehavior = new Quack();
  display = () => console.log("I'm a real Mallard Duck");
}

const mallard = new MallardDuck();
mallard.performQuack();
mallard.performFly();

class ModelDuck extends Duck {
  flyBehavior = new FlyNoWay();
  quackBehavior = new Quack();
  display = () => console.log("I'm a model duck");
}

class FlyRocketPowered implements FlyBehavior {
  fly() {
    console.log("I'm flying with a rocket!");
  }
}

const model = new ModelDuck();
model.performFly();
model.setFlyBehavior(new FlyRocketPowered());
model.performFly();
