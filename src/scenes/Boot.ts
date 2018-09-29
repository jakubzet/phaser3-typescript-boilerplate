import { load } from "webfontloader";

export class BootScene extends Phaser.Scene {
  fontsReady: boolean;

  constructor() {
    super({ key: "BootScene" });
    this.fontsReady = false;
  }

  fontsLoaded = () => {
    this.fontsReady = true;
  };

  preload() {
    this.load.image("loaderBg", "./assets/images/loader-bg.png");
    this.load.image("loaderBar", "./assets/images/loader-bar.png");

    this.add.text(100, 100, "Loading fonts...");

    load({
      google: {
        families: ["Bangers"],
      },
      active: this.fontsLoaded,
    });
  }

  update() {
    if (this.fontsReady) {
      this.scene.start("SplashScene");
    }
  }
}
