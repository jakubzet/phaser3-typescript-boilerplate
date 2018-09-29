export class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: "SplashScene" });
  }

  preload() {
    // Load your assets here
    this.load.image("mushroom", "assets/images/mushroom2.png");
  }

  create() {
    this.scene.start("GameScene");
  }

  update() {}
}
