/**
 * The rest of chapter two focuses on java.util.Observable - which to my
 * knowledge has no direct analogue in TypeScript. This brings me to wonder,
 * when I am working in TypeScript - specifically in the context of this
 * project - should I consider the node APIs?
 *
 * EventEmitter does make a nice candidate for a very simple interface.
 */

import EventEmitter from 'events';

/**
 * This is a very basic example, but I would most directly compare it to the
 * section on spring - where a lambda is passed to the observer.
 *
 * Here I add and remove listeners, and publish on a topic. The topic key only
 * updates its listeners.
 */
const onStandardLibrary = () => {
  const emitter = new EventEmitter();

  const update = (arg1: number, arg2: string) =>
    console.log(`Your update: I ate ${arg1} ${arg2}s`);

  const updateTwo = (arg1: number, arg2: string) =>
    console.log(`Your update: I saw him eat ${arg1} ${arg2}s`);

  const pupdate = () => console.log('Woof!');

  emitter.on('update', update);
  emitter.on('update', updateTwo);

  emitter.on('pupdate', pupdate);

  emitter.emit('update', 6, 'hot dog');
  emitter.emit('pupdate');

  emitter.removeListener('update', update);

  emitter.emit('update', 12, 'hot dog');
  emitter.emit('pupdate');
  emitter.removeListener('pupdate', pupdate);
  emitter.emit('pupdate');
};

export default onStandardLibrary;
