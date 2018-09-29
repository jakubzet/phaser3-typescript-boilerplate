import "phaser";
import { config } from "./config";
import { GameWindow, CordovaApp } from "./interfaces";
import { BootScene } from "./scenes/Boot";
import { SplashScene } from "./scenes/Splash";
import { GameScene } from "./scenes/Game";

declare const window: GameWindow;

const gameConfig: GameConfig = {
  ...config,
  scene: [BootScene, SplashScene, GameScene],
};

class Game extends Phaser.Game {
  constructor() {
    super(gameConfig);

    if (!window.cordova) {
      this.scene.start("Boot");
    }
  }
}

window.game = new Game();

if (window.cordova) {
  const app: CordovaApp = {
    initialize: function() {
      document.addEventListener(
        "deviceready",
        this.onDeviceReady.bind(this),
        false,
      );
    },

    // deviceready Event Handler
    onDeviceReady: function() {
      this.receivedEvent("deviceready");

      // When the device is ready, start Phaser Boot scene
      window.game.scene.start("Boot");
    },

    receivedEvent: function(id: string) {
      console.log("Received Event: " + id);
    },
  };

  app.initialize();
}
