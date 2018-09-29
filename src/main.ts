import "phaser";

import { BootScene } from "./scenes/Boot";
import { SplashScene } from "./scenes/Splash";
import { GameScene } from "./scenes/Game";

import { config } from "./config";

const gameConfig: GameConfig = {
  ...config,
  scene: [BootScene, SplashScene, GameScene],
};

const game = new Phaser.Game(gameConfig);
