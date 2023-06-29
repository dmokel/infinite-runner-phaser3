import Phaser from 'phaser';
import AnimationKeys from '../consts/animationkeys';
import TextureKeys from '../consts/texturekeys';

export default class RocketMouse extends Phaser.GameObjects.Container {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y);

    const mouse = scene.add
      .sprite(0, 0, TextureKeys.RocketMouse)
      .setOrigin(0.5, 1)
      .play(AnimationKeys.RocketMouseRun);

    this.add(mouse);

    scene.physics.add.existing(this);

    const body = this.body as Phaser.Physics.Arcade.Body;
    body.setSize(mouse.width, mouse.height);
    body.setOffset(mouse.width * -0.5, -mouse.height);
  }
}
