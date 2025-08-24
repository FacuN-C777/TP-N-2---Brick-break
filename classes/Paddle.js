export default class paddle extends Phaser.GameObjects.Rectangle {
  constructor(scene, x, y, width, height, color, cursor) {
    super(scene, x, y, width, height, color);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.setImmovable(true);
    this.body.setCollideWorldBounds(true);

    this.cursors = cursor;
  }

  moveX(coordX) {
    this.x += coordX;
  }

  update() {
    if (this.cursors.right.isDown) {
      this.moveX(10);
    } else if (this.cursors.left.isDown) {
      this.moveX(-10);
    }
  }
}
