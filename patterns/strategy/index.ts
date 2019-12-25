/**
 * The Strategy Pattern
 *
 * The Strategy Pattern defines a family of algorithms, encapsulates each one,
 * and makes them interchangable. Strategy lets the algorithm vary independently
 * from clients that use it.
 */

/**
 * Exercise
 *
 * We're working on a duck simulator in this design pattern example. We have
 * a wide variety of ducks to implement. The original approach involved a super
 * class Duck, from which all ducks would inherit.
 *
 * Where does this break down? Big Business asks us to let the ducks fly, so
 * we change the super class of course. But alas! Some of these ducks shouldn't
 * be flying. Enter a few design principles.
 *
 * What do these have to do with the 'Strategy Pattern'?
 *
 * DESIGN PATTERNS
 *   Identify the aspects of your application that vary
 *      and separate them from what stays the same.
 *
 *   -> The behavior of the ducks will change
 *
 *   Program to an interface, not an implementation.
 *
 *   -> The super class duck is what we're actually coding to here
 *
 *   Favor composition at inheritance
 *
 *   -> This is what got us in trouble in the first place! Over inheritance tied
 *      our subclasses to the super class.
 */

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

class RubberDuck extends Duck {
  flyBehavior = new FlyNoWay();
  quackBehavior = new MuteQuack();
  display = () => console.log("I am a Rubber Duck!");
}

const exampleOne = () => {
  console.log("Strategy Pattern: Example 1\n");
  console.log("Incoming Mallard Duck!");
  const mallard = new MallardDuck();
  mallard.performQuack();
  mallard.performFly();
  console.log("Now the rubber duck!");
  const rubberDuck = new RubberDuck();
  rubberDuck.performQuack();
  rubberDuck.performFly();
  console.log("\n**DONE**");
}

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

const exampleTwo = () => {
  console.log("Strategy Pattern: Example 2\n");
  console.log("Our implementation allows for dynamic assignment of behaviors.");
  const model = new ModelDuck();
  console.log("Executing and changing Fly...");
  model.performFly();
  model.setFlyBehavior(new FlyRocketPowered());
  model.performFly();
  console.log("Executing and changing Quack...");
  model.performQuack();
  model.setQuackBehavior(new Squeak());
  model.performQuack();
  console.log("\n**DONE**");
}

const ChapterOne = {
  exampleOne,
  exampleTwo,
}

export default ChapterOne;
