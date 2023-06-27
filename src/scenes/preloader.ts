import Phaser from 'phaser';
import AnimationKeys from '../consts/animationkeys';
import SceneKeys from '../consts/scenekeys';
import TextureKeys from '../consts/texturekeys';

export default class Preloader extends Phaser.Scene {
  constructor() {
    super(SceneKeys.Preloader);
  }

  preload() {
    this.load.image(TextureKeys.Background, 'house/bg_repeat_340x640.png');

    this.load.atlas(
      TextureKeys.RocketMouse,
      'characters/rocket-mouse.png',
      'characters/rocket-mouse.json'
    );
  }

  create() {
    this.anims.create({
      key: AnimationKeys.RocketMouseRun,
      frames: this.anims.generateFrameNames(TextureKeys.RocketMouse, {
        start: 1,
        end: 4,
        prefix: 'rocketmouse_run',
        zeroPad: 2,
        suffix: '.png',
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.scene.start(SceneKeys.Game);
  }
}
