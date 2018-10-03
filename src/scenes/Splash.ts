import keys from "../constants/keys";

export class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: keys.scenes.SplashScene });
  }

  init() {}

  preload() {
    // Load your assets here
    this.load.path = "../assets/";
    this.load.image(keys.sprites.mushroom, "images/mushroom2.png");
  }

  create() {
    this.scene.start(keys.scenes.GameScene, {
      passedData: true,
    });
  }

  update() {}
}
