import Phaser from "phaser";
import Player from "../prefabs/Player";
import { debugDraw } from "../utils/debug";

export default class Game extends Phaser.Scene {
  private player!: Player;

  constructor() {
    super("game");
  }

  create() {

    // DEBUGER
    //debugDraw(wallsLayer, this);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(_time: number, _delta: number): void {
    this.player.move();
  }
}
