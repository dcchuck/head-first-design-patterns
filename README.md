# Head First Design Patterns

A typescript implementation.

## Design Principles

* `Identify the aspects of your application that vary and separate them from what stays the same.`
* `Program to an interface, not an implementation.` - `Program to an interface really means program to a super type.`
* `Favor composition over inheritance`
* `Strive for loosely coupled designs between objects that interact.`
* `Classes should be open for extension, but closed for modification.`
* `Depend upon abstractions. Do no depend upon concrete classes.`

## Patterns

#### The Strategy Pattern
The Strategy Pattern defines a family of algorithms, encapsulates each one, and makes them interchangable. Strategy lets the algorithm vary independently from clients that use it.

#### The Observer Pattern
The Observer Pattern defines a one-to-many dependency between objects so that when one objects changes state, all its dependents are notified and updated automatically.

#### The Decorator Pattern
The Decorator Pattern attaches additional responsibilties to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

#### The Factory Method Pattern
The Factory Method Pattern defines an interface for creating an object, but lets subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.

#### The Abstract Factory Pattern
The Abstract Factory Pattern provides an interface for creating families of related or dependent object without specifying their concreate classes.

#### The Singleton Pattern
The Singleton Pattern ensures a class has only one instance, and provides a global point of access to it.

#### The Command Pattern
The Command Pattern encapsulates a request as an object, thereby letting you parameterize other objects with different requests, queue or log requests, and support undoable operations.
