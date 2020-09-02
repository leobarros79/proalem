class Scene1 extends SimpleScene {
  constructor() {
    super("Scene1");
  }
  init(){
  }
preload() {
  this.load.image("back1", "assets/back1.png");
  this.load.image("player", "assets/player.png");
  this.load.image("pessoa", "assets/pessoa.png");
}
create() {
this.add.image(0, 0, "back1").setOrigin(0, 0);
this.add.sprite(90, 250, "player").setScale(0.2);
this.add.sprite(400, 230, "pessoa").setScale(0.12);
}

update() {
}
}