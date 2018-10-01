//import { Mushroom } from "../sprites/Mushroom";
import { Player } from "../scripts/Player";
import { lang } from "../lang";

export class GameScene extends Phaser.Scene {
  player!: Player;
  tileset!: Phaser.Tilemaps.Tileset;
  map!: Phaser.Tilemaps.Tilemap;
  bgLayer!: Phaser.Tilemaps.DynamicTilemapLayer;
  groundLayer!: Phaser.Tilemaps.DynamicTilemapLayer;
  //mushroom!: Phaser.GameObjects.Sprite;

  constructor() {
    super({
      // Setting scene key
      key: "GameScene",

      // Adding physics
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 1000 },
        },
      },
    });
  }

  init() {}

  preload() {
    // Set loading path
    this.load.path = "../assets/";

    // Loading Sample Map JSON
    this.load.tilemapTiledJSON("map", "tilemaps/sample-tilemap.json");

    // Loading Sample Map Tileset
    this.load.image("sample-tileset", "tilesets/sample-tileset.png");
  }

  create() {
    // Setting map
    const { Tilemap, MapData } = Phaser.Tilemaps;
    this.map = this.make.tilemap({ key: "map" });

    // Adding tileset image to map
    this.tileset = this.map.addTilesetImage("sample-tileset");

    // Setting background layer
    this.bgLayer = this.map.createDynamicLayer(
      "Background",
      this.tileset,
      0,
      0,
    );

    // Setting ground layer
    this.groundLayer = this.map.createDynamicLayer(
      "Ground",
      this.tileset,
      0,
      0,
    );

    // Getting spawn point from tilemap layers
    const spawn: any = this.map.findObject(
      "Spawn",
      (obj) => obj.name === "Spawn Point",
    );

    // Adding sprite
    //this.mushroom = new Mushroom(this, 128, 64, "mushroom");

    // Adding player
    this.player = new Player(this, spawn.x, spawn.y);

    // Setting collisions
    this.player.sprite.setCollideWorldBounds(true);
    this.groundLayer.setCollisionByProperty({ collides: true });
    this.physics.world.addCollider(this.player.sprite, this.groundLayer);

    // Adding UI
    const bannerText = lang.text("welcome");
    this.add
      .text(20, 10, bannerText, {
        font: "42px Bangers",
        fill: "#2299ff",
        smoothed: false,
      })
      .setScrollFactor(0);

    // Setting camera
    this.cameras.main.startFollow(this.player.sprite);
    this.cameras.main.setBounds(
      0,
      0,
      this.map.widthInPixels,
      this.map.heightInPixels,
    );
  }

  update() {
    // Updating player every frame
    this.player.update();
  }
}
