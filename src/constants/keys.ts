const keys = {
  scenes: {
    BootScene: "BootScene",
    SplashScene: "SplashScene",
    GameScene: "GameScene",
  },
  sprites: {
    mushroom: "mushroom",
  },
  anims: {
    playerIdle: "playerIdle",
    playerRun: "playerRun",
  },
  images: {
    loaderBar: "LoaderBar",
    loaderBg: "LoaderBg",
  },
  tilemaps: {
    sampleMap: "sample-map",
  },
  layers: {
    sampleMap: {
      background: "Background",
      ground: "Ground",
    },
  },
  tilesets: {
    sampleTileset: "sample-tileset",
  },
  physics: {
    arcade: "arcade",
  },
};

export default Object.freeze(keys);
