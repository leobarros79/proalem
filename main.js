

let config = {
  type: Phaser.AUTO,
  width: 512,
  height: 349,
 // backgroundColor: 0x00FF00,
  parent: "phaser-div",
  dom: {
    createContainer: true
  },
  scene: [Scene1, Scene2],
}

var foundation_fonts = `Inconsolata, Cousine, Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`;

const game = new Phaser.Game(config);

