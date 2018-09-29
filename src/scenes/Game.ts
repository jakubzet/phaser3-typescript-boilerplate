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

    this.add.text(100, 100, bannerText, {
      font: "64px Bangers",
      fill: "#7744ff",
      smoothed: false,
    });
  }
}
