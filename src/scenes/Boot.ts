import keys from "../constants/keys";
import { load } from "webfontloader";

export class BootScene extends Phaser.Scene {
  fontsReady: boolean;

  constructor() {
    super({ key: keys.scenes.BootScene });
    this.fontsReady = false;
  }

  fontsLoaded = () => {
    this.fontsReady = true;
  };

  preload() {
    this.load.path = "../assets/";
    this.load.image(keys.images.loaderBg, "images/loader-bg.png");
    this.load.image(keys.images.loaderBar, "images/loader-bar.png");

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
      this.scene.start(keys.scenes.SplashScene);
    }
  }
}
