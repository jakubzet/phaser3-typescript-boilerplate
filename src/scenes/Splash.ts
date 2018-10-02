import keys from "../constants/keys";

export class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: keys.scenes.SplashScene });
  }

  preload() {
    // Load your assets here
    this.load.image("mushroom", "assets/images/mushroom2.png");
  }

  create() {
    this.scene.start(keys.scenes.GameScene);
  }

  update() {}
}
