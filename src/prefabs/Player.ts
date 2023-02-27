import Phaser from "phaser";

export default class Player extends Phaser.Physics.Arcade.Sprite {
  private SPEED = 100;

  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string,
    _frame?: string
  ) {
    super(scene, x, y, texture, _frame);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.cursors = this.scene.input.keyboard.createCursorKeys();

    this.setPlayerAnimation(texture);
    this.playAnim().IDLE.DOWN();
  }

  setPlayerAnimation(texture: string) {
    this.anims.create({
      key: "faune-idle-up",
      frames: [{ key: "faune", frame: "walk-up-3.png" }],
    });

    this.anims.create({
      key: "faune-idle-side",
      frames: [{ key: "faune", frame: "walk-side-3.png" }],
    });

    this.anims.create({
      key: "faune-idle-down",
      frames: [{ key: "faune", frame: "walk-down-3.png" }],
    });

    this.anims.create({
      key: "faune-run-down",
      frames: this.anims.generateFrameNames(texture, {
        start: 1,
        end: 8,
        prefix: "run-down-",
        suffix: ".png",
      }),
      repeat: -1,
      frameRate: 15,
    });

    this.anims.create({
      key: "faune-run-side",
      frames: this.anims.generateFrameNames(texture, {
        start: 1,
        end: 8,
        prefix: "run-side-",
        suffix: ".png",
      }),
      repeat: -1,
      frameRate: 15,
    });

    this.anims.create({
      key: "faune-run-up",
      frames: this.anims.generateFrameNames(texture, {
        start: 1,
        end: 8,
        prefix: "run-up-",
        suffix: ".png",
      }),
      repeat: -1,
      frameRate: 15,
    });

    this.anims.create({
      key: "faune-death",
      frames: this.anims.generateFrameNames(texture, {
        start: 1,
        end: 4,
        prefix: "faint-",
        suffix: ".png",
      }),
      repeat: -1,
      frameRate: 5,
    });
  }

  playAnim() {
    return {
      IDLE: {
        UP: () => this.anims.play("faune-idle-up", true),
        SIDE: () => this.anims.play("faune-idle-side", true),
        DOWN: () => this.anims.play("faune-idle-down", true),
        DEFAULT: () =>
          this.play(this.anims.currentAnim.key.replace("run", "idle")),
      },
      RUN: {
        UP: () => this.anims.play("faune-run-up", true),
        SIDE: () => this.anims.play("faune-run-side", true),
        DOWN: () => this.anims.play("faune-run-down", true),
      },
      DEATH: () => this.anims.play("faune-death", true),
    };
  }

  moveUp() {
    this.playAnim().RUN.UP();
    this.setVelocity(0, -this.SPEED);
  }

  moveRight() {
    this.playAnim().RUN.SIDE();
    this.flipX = false;
    this.setVelocity(this.SPEED, 0);
  }

  moveDown() {
    this.playAnim().RUN.DOWN();
    this.setVelocity(0, this.SPEED);
  }

  moveLeft() {
    this.playAnim().RUN.SIDE();
    this.flipX = true;
    this.setVelocity(-this.SPEED, 0);
  }

  // Move the Player
  move() {
    if (!this.cursors) return;

    const { up, left, down, right } = this.cursors;

    if (up.isDown) {
      this.moveUp();
    } else if (right.isDown) {
      this.moveRight();
    } else if (down.isDown) {
      this.moveDown();
    } else if (left.isDown) {
      this.moveLeft();
    } else {
      this.setVelocity(0, 0);
      this.playAnim().IDLE.DEFAULT();
    }
  }
  
  defaultCamera() {
    this.scene.cameras.main.startFollow(this, true);
  }
}
