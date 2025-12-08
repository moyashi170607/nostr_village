import Phaser from "phaser"
import { VillageMap } from "./scene/village_map";

export let play_canvas: HTMLElement | null;
export let canvasWidth: number;
export let canvasHeight: number;

export const GAME_DEFAULT_WIDTH: number = 1200
export const GAME_DEFAULT_HEIGHT: number = 800

class IndexScene extends Phaser.Scene {
  constructor() {
    super({ key: "index_scene", active: true })
  }
  preload() {

  }

  create() {
    this.scene.start("village_map")
  }
}

const config: Phaser.Types.Core.GameConfig = {
  width: GAME_DEFAULT_WIDTH,
  height: GAME_DEFAULT_HEIGHT,
  type: Phaser.AUTO,
  //parent: "",
  antialias: true,
  pixelArt: false,
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        x: 0,
        y: 0
      },
      debug: false
    }
  },
  scene: [
    IndexScene,
    VillageMap
  ],
  fps: {
    target: 60
  },
  dom: {
    createContainer: true
  }
}

class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

let game: Phaser.Game;

window.addEventListener("load", () => {
  game = new Game(config);

  play_canvas = document.getElementById("display") ?? null;
  if (play_canvas) {
    canvasWidth = play_canvas.clientWidth;
    canvasHeight = play_canvas.clientHeight;
  }
})

window.addEventListener('resize', () => game.scale.refresh());
window.addEventListener('load', () => { game.scale.refresh() });