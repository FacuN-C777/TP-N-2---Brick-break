// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/

import paddle from "../classes/Paddle.js";
import ball from "../classes/Ball.js";
import obstacle from "../classes/Obstacle.js";

export default class HelloWorldScene extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("hello-world");
  }

  init() {}

  preload() {}

  create() {
    this.cursors = this.input.keyboard.createCursorKeys();

    this.keydown = this.input.keyboard.addKeys("R");
    this.input.keyboard.on("keydown-R", () => {
      this.scene.restart();
    });

    this.ball = new ball(this, 400, 200, 30, 0xff0000);

    this.player = new paddle(this, 400, 550, 200, 35, 0x141780ff, this.cursors);

    this.physics.add.collider(this.ball, this.player);

    this.obstacle = new obstacle(
      this,
      Phaser.Math.Between(50, 800),
      Phaser.Math.Between(50, 300),
      200,
      35,
      0xffffff
    );

    this.physics.add.collider(
      this.obstacle,
      this.ball,
      this.hitObstacle,
      null,
      this
    );
  }

  update() {
    this.player.update();
  }

  hitObstacle() {
    this.obstacle.destroy();
    this.obstacle = new obstacle(
      this,
      Phaser.Math.Between(50, 800),
      Phaser.Math.Between(50, 300),
      200,
      35,
      0xffffff
    );
  }
}
