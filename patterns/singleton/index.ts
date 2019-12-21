/**
 * The Singleton Pattern
 *
 * The Singleton Pattern ensures a class has only one instance, and provides a
 * global point of access to it.
 */

class ChocolateBoiler {
  private empty: boolean;
  private boiled: boolean;
  private static uniqueInstace: ChocolateBoiler;

  public static getInstace(): ChocolateBoiler {
    if (this.uniqueInstace === undefined) {
      this.uniqueInstace = new ChocolateBoiler();
    }

    return this.uniqueInstace;
  }

  private constructor() {
    this.empty = true;
    this.boiled = false;
  }

  report() {
    console.log(`STATUS | Emtpy? ${this.empty}; BOILED? ${this.boiled}`);
  }
}

const exampleOne = () => {
  const boiler = ChocolateBoiler.getInstace();
  boiler.report();
}

/**
 * Javascript is single threaded, so there's no need to worry about enabling
 * multithreaded access, though the advice as described in the text is quite
 * nice in the generic sense.
 */

export default { exampleOne };
