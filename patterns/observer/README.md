# The Observer Pattern

The Observer Pattern defines a one-to-many dependency between objects so that
when one objects changes state, all its dependents are notified and updated
automatically.

# About The Code

We are working on a weather display unit. There are some statistics to display
and update.

How do we scale this? Enter the Observer Pattern. As it turns out, Java
has an observable.

## Design Principles

* Strive for loosely coupled designs between objects that interact.
  - Subjects have Observers. These Observers are updated on state change, letting us hold state in one place, and let indepdent observers do what they want with the state (while staying updated!)

# Tie It Together

The Weather Displays act as our Observers, subscribing to updates from the
WeatherData, our subject.

The node EventEmitter came to mind when reading through the Observer Pattern,
with the subjects being the named event channel. Pub/Sub is a pretty common
paradigm. Included are some brief examples.
