/**
 * The Command Pattern
 *
 * The Command Pattern encapsulates a request as an object, thereby letting you
 * parameterize other objects with different requests, queue or log requests,
 * and support undoable operations.
 */

interface Command {
  execute: () => void;
  undo: () => void;
}

class Light {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  on() {
    console.log(`Turning on ${this.name}`);
  }
  off() {
    console.log(`Turning off ${this.name}`);
  }
}

class LightOnCommand implements Command {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute() {
    this.light.on();
  }

  undo() {
    this.light.off();
  }
}

class LightOffCommand implements Command {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute() {
    this.light.off();
  }

  undo() {
    this.light.on();
  }
}

class SimpleRemoteControl {
  slot: Command;

  /**
   * Passing in the command to the constructor here so the compiler doesn't
   * complain
   */
  constructor(command: Command) {
    this.slot = command;
  }
  setCommand(command: Command) {
    this.slot = command;
  }
  buttonWasPressed() {
    this.slot.execute();
  }
}

function exampleOne() {
  const light = new Light('');
  const lightOnCommand = new LightOnCommand(light);

  const simpleRempte = new SimpleRemoteControl(lightOnCommand);
  simpleRempte.buttonWasPressed();
}

class NoCommand implements Command {
  execute() {
    console.log('No Command!');
  }

  undo() {
    console.log('I undo NOTHING!');
  }
}

class Stereo {
  on() {
    console.log('Stereo on!');
  }

  off() {}

  setCd() {
    console.log('Set CD!');
  }

  removeCd() {}

  setVolume(volume: number) {
    console.log(`Volume: ${volume}`);
  }
}

class StereoOnWIthCDCommand implements Command {
  stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  execute() {
    this.stereo.on();
    this.stereo.setCd();
    this.stereo.setVolume(11);
  }

  undo() {
    this.stereo.off();
    this.stereo.removeCd();
    this.stereo.setVolume(0);
  }
}

class RemoteControl {
  onCommands: Command[];
  offCommands: Command[];
  undoCommand: Command;

  constructor() {
    this.onCommands = Array(7).map(_e => new NoCommand());
    this.offCommands = Array(7).map(_e => new NoCommand());
    this.undoCommand = new NoCommand();
  }

  setCommand(slot: number, onCommand: Command, offCommand: Command) {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  onButtonWasPushed(slot: number) {
    this.onCommands[slot].execute();
    this.undoCommand = this.onCommands[slot];
  }

  offButtonWasPushed(slot: number) {
    this.offCommands[slot].execute();
    this.undoCommand = this.offCommands[slot];
  }

  undoButtonWasPushed() {
    this.undoCommand.undo();
  }
}

function exampleTwo() {
  const remoteControl = new RemoteControl();
  const livingRoomLight = new Light('Living Room Light');
  const livingRoomLightOn = new LightOnCommand(livingRoomLight);
  const livingRoomLightOff = new LightOffCommand(livingRoomLight);

  const kitchenLight = new Light('Kitchen Light');
  const kitchenLightOn = new LightOnCommand(kitchenLight);
  const kitchenLightOff = new LightOffCommand(kitchenLight);

  remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
  remoteControl.setCommand(1, kitchenLightOn, kitchenLightOff);

  remoteControl.onButtonWasPushed(0);
  remoteControl.undoButtonWasPushed();
  remoteControl.onButtonWasPushed(1);
  remoteControl.offButtonWasPushed(0);
  remoteControl.offButtonWasPushed(1);
  remoteControl.undoButtonWasPushed();
}

export default {
  exampleOne,
  exampleTwo,
};
