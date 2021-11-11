# The Strategy Pattern

'''
The Strategy Pattern defines a family of algorithms, encapsulates each one,
and makes them interchangable. Strategy lets the algorithm vary independently
from clients that use it.
'''

## About The Code

The example project is a "Duck Simulator". The key thing here is that our simulator
supports a wide variety of ducks.

The original design was driven by inheritance. A super class Duck was created,
and all ducks inherit from this.

Where does this break down? Big Business asks us to let the ducks fly, so
we change the super class of course. But alas! Some of these ducks shouldn't
be flying. Enter a few design principles.

### Design Principles
* Identify the aspects of your application that vary and separate them from what stays the same.
  - The behavior of the ducks will change

* Program to an interface, not an implementation.
  - In this case we code the abstract duck.

* Favor composition at inheritance
  - This is what got us in trouble in the first place! Over inheritance tied our subclasses to the super class.

## Tie It Together

In this case, the families of algorithms we're encapsulating are flight and
quack behavior of ducks. Rather than just creating a duck superclass with
some default behavior and having all ducks inherit from it, we define an
abstract duck class. We take what varies about a duck (in this case, how it
flies and how it quacks) and define interfaces for them for this abstract
class to implement.

Now, our ducks just implement this class. We also change this bevior on the
at runtime by calling setter methods.

By favoring composition over inheritance, we de-risk issues that could arrise from
extending our base class. Simultaneously, we have an interface to code to - so anything
that wants to use our "ducks" in the simulator.

## Where do we see this?

Right out of the React docs - [link](https://reactjs.org/docs/composition-vs-inheritance.html)

