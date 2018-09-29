export interface GameWindow extends Window {
  game: Phaser.Game;
  cordova: Object;
}

export interface CordovaApp {
  initialize: () => void;
  onDeviceReady: () => void;
  receivedEvent: (id: string) => void;
}
