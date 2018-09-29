export class Mushroom extends Phaser.GameObjects.Sprite {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string,
    frame?: string | integer,
  ) {
    super(scene, x, y, texture, frame);
  }
}
