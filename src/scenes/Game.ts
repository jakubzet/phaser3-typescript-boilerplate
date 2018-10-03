import keys from "../constants/keys";
import { Player } from "../scripts/Player";
import { lang } from "../lang";

export class GameScene extends Phaser.Scene {
  player!: Player;
  tileset!: Phaser.Tilemaps.Tileset;
  map!: Phaser.Tilemaps.Tilemap;
  bgLayer!: Phaser.Tilemaps.DynamicTilemapLayer;
  groundLayer!: Phaser.Tilemaps.DynamicTilemapLayer;

  constructor() {
    super({
      key: keys.scenes.GameScene,
      // Adding physics
      physics: {
        default: keys.physics.arcade,
        arcade: {
          gravity: { y: 1000 },
        },
      },
    });
  }

  init(data: Object) {
    console.log(`Scene ${keys.scenes.GameScene} passed data`, data);
  }

  preload() {
    // Set loading path
    this.load.path = "../assets/";

    // Loading Sample Map JSON
    this.load.tilemapTiledJSON(
      keys.tilemaps.sampleMap,
      "tilemaps/sample-tilemap.json",
    );

    // Loading Sample Map Tileset
    this.load.image(keys.tilesets.sampleTileset, "tilesets/sample-tileset.png");
  }

  create() {
    // Setting map
    const { Tilemap, MapData } = Phaser.Tilemaps;
    this.map = this.make.tilemap({ key: keys.tilemaps.sampleMap });

    // Adding tileset image to map
    this.tileset = this.map.addTilesetImage(keys.tilesets.sampleTileset);

    // Setting layers
    this.bgLayer = this.map.createDynamicLayer(
      keys.layers.sampleMap.background,
      this.tileset,
      0,
      0,
    );

    this.groundLayer = this.map.createDynamicLayer(
      keys.layers.sampleMap.ground,
      this.tileset,
      0,
      0,
    );

    // Getting spawn point from tilemap layers
    const spawn: any = this.map.findObject(
      "Spawn",
      (obj) => obj.name === "Spawn Point",
    );

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
    this.cameras.main.setBounds(
      0,
      0,
      this.map.widthInPixels,
      this.map.heightInPixels,
    );
    this.cameras.main.startFollow(this.player.sprite);
  }

  update() {
    // Updating player every frame
    this.player.update();
  }
}
