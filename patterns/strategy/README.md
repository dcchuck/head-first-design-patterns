# The Strategy Pattern

The Strategy Pattern defines a family of algorithms, encapsulates each one,
and makes them interchangable. Strategy lets the algorithm vary independently
from clients that use it.

# About The Code

We're working on a duck simulator in this design pattern example. We have
a wide variety of ducks to implement. The original approach involved a super
class Duck, from which all ducks would inherit.

Where does this break down? Big Business asks us to let the ducks fly, so
we change the super class of course. But alas! Some of these ducks shouldn't
be flying. Enter a few design principles.

What do these have to do with the 'Strategy Pattern'?

## Design Principles
* Identify the aspects of your application that vary and separate them from what stays the same.
  - The behavior of the ducks will change

* Program to an interface, not an implementation.
  - The super class duck is what we're actually coding to here

* Favor composition at inheritance
  - This is what got us in trouble in the first place! Over inheritance tied our subclasses to the super class.

# Tie It Together

In this case, the families of algorithms we're encapsulating are flight and
quack behavior of ducks. Rather than just creating a duck superclass with
some default behavior and having all ducks inherit from it, we define an
abstract duck class. We take what varies about a duck (in this case, how it
flies and how it quacks) and define interfaces for them for this abstract
class to implement.

Now, our ducks just implement this class. We also change this  bevior on the
at runtime by calling setter methods.

