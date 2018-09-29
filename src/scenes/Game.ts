import { Mushroom } from "../sprites/Mushroom";
import { lang } from "../lang";

export class GameScene extends Phaser.Scene {
  mushroom!: Phaser.GameObjects.Sprite;

  constructor() {
    super({ key: "GameScene" });
  }

  init() {}

  preload() {}

  create() {
    const bannerText: string = lang.text("welcome");

    this.mushroom = new Mushroom(this, 400, 300, "mushroom");

    this.add.existing(this.mushroom);

    this.add.text(20, 10, bannerText, {
      font: "42px Bangers",
      fill: "#2299ff",
      smoothed: false,
    });
  }
}
