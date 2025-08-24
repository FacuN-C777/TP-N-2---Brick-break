export default class ball extends Phaser.GameObjects.Ellipse {
  constructor(scene, x, y, radius, color) {
    super(scene, x, y, radius * 2, radius * 2, color);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.setVelocity(200, 300);
    this.body.setBounce(1, 1);
    this.body.setCollideWorldBounds(true);
  }
}
