export interface GameWindow extends Window {
  game: Phaser.Game;
  cordova: Object;
}

export interface CordovaApp {
  initialize: () => void;
  onDeviceReady: () => void;
  receivedEvent: (id: string) => void;
}

export interface ControlsScheme {
  left: Phaser.Input.Keyboard.Key;
  up: Phaser.Input.Keyboard.Key;
  right: Phaser.Input.Keyboard.Key;
  down: Phaser.Input.Keyboard.Key;
}
