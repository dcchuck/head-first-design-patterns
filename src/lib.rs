// We don't use this reference to self here...
trait FlyBehavior {
    fn fly(&self) -> ();
}

trait QuackBehavior {
    fn quack(&self) -> ();
}

struct Duck {
    fly_behavior: Box<dyn FlyBehavior>,
    quack_behavior: Box<dyn QuackBehavior>,
    display: fn() -> (),
}

impl Duck {
    pub fn perform_fly(&self) {
        self.fly_behavior.fly();
    }

    pub fn perform_quack(&self) {
        self.quack_behavior.quack();
    }

    pub fn swim(&self) {
        println!("All ducks float, even decoys!");
    }

    pub fn set_fly_beavior(&mut self, fb: Box<dyn FlyBehavior>) {
        self.fly_behavior = fb;
    }

    pub fn set_quack_beavior(&mut self, qb: Box<dyn QuackBehavior>) {
        self.quack_behavior = qb;
    }
}

struct FlyWithWings {}

impl FlyBehavior for FlyWithWings {
    fn fly(&self) {
        println!("I am flying!");
    }
}

struct FlyNoWay {}

impl FlyBehavior for FlyNoWay {
    fn fly(&self) {
        println!("I can't fly.");
    }
}

struct Quack {}

impl QuackBehavior for Quack {
    fn quack(&self) {
        println!("Quack!");
    }
}

struct MuteQuack {}

impl QuackBehavior for MuteQuack {
    fn quack(&self) {
        println!("<< Silence >>");
    }
}

struct Squeak {}

impl QuackBehavior for Squeak {
    fn quack(&self) {
        println!("Squeak!");
    }
}

pub fn strategy_pattern() {
    let qb = Box::new(Quack {});
    let fb = Box::new(FlyWithWings {});

    // This doesn't achieve the same thing as in the Typescript. This requires
    // me to spin up a new mallar duck with these type not assigned to that
    // super type.
    //
    // However, we are able to achieve the dynamic dispatch here. The
    // extension of the duck class to create the subclass to come.
    let mut mallard_duck = Duck {
        fly_behavior: fb,
        quack_behavior: qb,
        display: || { println!("here I am!"); }
    };

    // TODO I don't want to call this like this...
    (mallard_duck.display);
    mallard_duck.swim();
    mallard_duck.perform_fly();
    mallard_duck.perform_quack();
    mallard_duck.set_fly_beavior(Box::new(FlyNoWay {}));
    mallard_duck.set_quack_beavior(Box::new(Squeak {}));
    mallard_duck.perform_fly();
    mallard_duck.perform_quack();
    mallard_duck.set_quack_beavior(Box::new(MuteQuack {}));
    mallard_duck.perform_quack();
}
