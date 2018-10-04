// This script is TODO
import keys from "../constants/keys";
import { ControlsScheme } from "../interfaces";

export class Player {
  buttons: object;
  sprite: Phaser.Physics.Arcade.Sprite;
  scene: Phaser.Scene;

  constructor(scene: Phaser.Scene, spriteKey: string, x: number, y: number) {
    this.scene = scene;

    // Create the physics-based sprite that we will move around and animate
    this.sprite = scene.physics.add
      .sprite(x, y, spriteKey, 0)
      .setDrag(1000, 0)
      .setMaxVelocity(300, 400)
      .setSize(64, 64)
      .setOffset(0, 0);

    // Create the animations we need from the player spritesheet
    // const anims = scene.anims;
    // anims.create({
    //   key: keys.anims.playerIdle,
    //   frames: anims.generateFrameNumbers("player", { start: 0, end: 3 }),
    //   frameRate: 3,
    //   repeat: -1,
    // });
    // anims.create({
    //   key: keys.anims.playerRun,
    //   frames: anims.generateFrameNumbers("player", { start: 8, end: 15 }),
    //   frameRate: 12,
    //   repeat: -1,
    // });

    // Track the arrow keys
    const { LEFT, RIGHT, UP, DOWN } = Phaser.Input.Keyboard.KeyCodes;
    this.buttons = scene.input.keyboard.addKeys({
      left: LEFT,
      right: RIGHT,
      up: UP,
      down: DOWN,
    });
  }

  freeze() {
    this.sprite.body.moves = false;
  }

  update() {
    const buttons = <ControlsScheme>this.buttons;
    const sprite = this.sprite;
    const onGround = sprite.body.blocked.down;
    const acceleration = onGround ? 600 : 200;

    // Apply horizontal acceleration and flip the sprite when left or right are applied
    if (buttons.left.isDown) {
      sprite.setAccelerationX(-acceleration);
      sprite.setFlipX(true);
    } else if (buttons.right.isDown) {
      sprite.setAccelerationX(acceleration);
      sprite.setFlipX(false);
    } else {
      sprite.setAccelerationX(0);
    }

    // Only allow the player to jump if they are on the ground
    if (onGround && buttons.up.isDown) {
      sprite.setVelocityY(-500);
    }

    // Update the animation/texture based on the state of the player
    if (onGround) {
      //if (sprite.body.velocity.x !== 0) sprite.anims.play(keys.anims.playerRun, true);
      //else sprite.anims.play(keys.anims.playerIdle, true);
    } else {
      //sprite.anims.stop();
      //sprite.setTexture("player", 10);
    }
  }

  destroy() {
    this.sprite.destroy();
  }
}
