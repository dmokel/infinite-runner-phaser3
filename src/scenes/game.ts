import Phaser from 'phaser';
import AnimationKeys from '../consts/animationkeys';
import SceneKeys from '../consts/scenekeys';
import TextureKeys from '../consts/texturekeys';

export default class Game extends Phaser.Scene {
  constructor() {
    super(SceneKeys.Game);
  }

  create() {
    // this.add.image(0, 0, 'background').setOrigin(0, 0);
    const width = this.scale.width;
    const height = this.scale.height;

    this.add
      .tileSprite(0, 0, width, height, TextureKeys.Background)
      .setOrigin(0);

    this.add
      .sprite(
        width * 0.5,
        height * 0.5,
        TextureKeys.RocketMouse,
        'rocketmouse_fly01.png'
      )
      .play(AnimationKeys.RocketMouseRun);
  }
}
