import Phaser from 'phaser';
import AnimationKeys from '../consts/animationkeys';
import SceneKeys from '../consts/scenekeys';
import TextureKeys from '../consts/texturekeys';

export default class Game extends Phaser.Scene {
  private backbround!: Phaser.GameObjects.TileSprite;

  constructor() {
    super(SceneKeys.Game);
  }

  create() {
    // this.add.image(0, 0, 'background').setOrigin(0, 0);
    const width = this.scale.width;
    const height = this.scale.height;

    this.backbround = this.add
      .tileSprite(0, 0, width, height, TextureKeys.Background)
      .setOrigin(0)
      .setScrollFactor(0, 0);

    // this.add
    //   .sprite(
    //     width * 0.5,
    //     height * 0.5,
    //     TextureKeys.RocketMouse,
    //     'rocketmouse_fly01.png'
    //   )
    //   .play(AnimationKeys.RocketMouseRun);

    const mouse = this.physics.add
      .sprite(
        width * 0.5,
        height - 30,
        TextureKeys.RocketMouse,
        'rocketmouse_fly01.png'
      )
      .setOrigin(0.5, 1)
      .play(AnimationKeys.RocketMouseRun);

    const body = mouse.body as Phaser.Physics.Arcade.Body;
    body.setCollideWorldBounds(true);
    body.setVelocityX(200);

    this.physics.world.setBounds(0, 0, Number.MAX_SAFE_INTEGER, height - 30);

    this.cameras.main.startFollow(mouse);
    this.cameras.main.setBounds(0, 0, Number.MAX_SAFE_INTEGER, height);
  }

  update(t, dt) {
    this.backbround.setTilePosition(this.cameras.main.scrollX);
  }
}
