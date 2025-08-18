// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/

export default class HelloWorldScene extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("hello-world");
  }

  init() {
    // this is called before the scene is created
    // init variables
    // take data passed from other scenes
    // data object param {}
  }

  preload() {
    // load assets
    this.load.image("sky", "public/assets/space3.png");
    this.load.image("logo", "public/assets/phaser3-logo.png");
    this.load.image("red", "public/assets/particles/red.png");
  }

  create() {
    // create game objects
    //this.add.image(400, 300, "sky");

    /*const logo = this.physics.add.image(400, 100, "logo");
    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    // emmit particles from logo
    const emitter = this.add.particles(0, 0, "red", {
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: "ADD",
    });

    emitter.startFollow(logo);*/

    const ball = this.add.circle(400, 200, 30, 0xff0000);
    this.physics.add.existing(ball);
    ball.body.setVelocity(200, 300);
    ball.body.setBounce(1.005, 1.005);
    ball.body.setCollideWorldBounds(true);

    this.player = this.add.rectangle(400, 550, 200, 35, 0x141780ff);
    this.physics.add.existing(this.player);
    this.player.body.setCollideWorldBounds(true);
    this.player.body.allowGravity = false;
    this.player.body.immovable = true;

    this.physics.add.collider(ball, this.player);

    this.obstacle = this.add.rectangle(
      Phaser.Math.Between(50, 800),
      Phaser.Math.Between(50, 300),
      200,
      35,
      0xffffff
    );
    this.physics.add.existing(this.obstacle, true);
    this.obstacle.isHit = false;
    if (this.obstacle.isHit == true) {
      this.obstacle.destroy();
    }
    this.physics.add.collider(
      this.obstacle,
      ball,
      this.hitObstacle,
      null,
      this
    );

    this.cursors = this.input.keyboard.createCursorKeys();

    this.keydown = this.input.keyboard.addKeys("R");

    this.input.keyboard.on("keydown-R", () => {
      this.scene.restart();
    });
  }

  update() {
    // update game objects
    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-200);
    } else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(200);
    } else {
      this.player.body.setVelocityX(0);
    }
    this.player.body.setVelocityY(0);
  }

  hitObstacle(ball) {
    this.obstacle.isHit = true;
    if (this.obstacle.isHit == true) {
      this.obstacle.destroy();
    }
    this.obstacle = this.add.rectangle(
      Phaser.Math.Between(50, 800),
      Phaser.Math.Between(50, 300),
      200,
      35,
      0xffffff
    );
    this.physics.add.existing(this.obstacle, true);
    this.obstacle.isHit = false;
  }
}
