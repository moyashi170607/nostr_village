import Phaser from "phaser"

export let play_canvas: HTMLElement | null;
export let canvasWidth: number;
export let canvasHeight: number;

class IndexScene extends Phaser.Scene {
  preload() {

  }

  create() {

  }
}

const config: Phaser.Types.Core.GameConfig = {
  width: 600,
  height: 300,
  type: Phaser.AUTO,
  parent: "tutumu",
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
    IndexScene
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

  play_canvas = document.getElementById("tutumu") ?? null;
  if (play_canvas) {
    canvasWidth = play_canvas.clientWidth;
    canvasHeight = play_canvas.clientHeight;
  }
})

window.addEventListener('resize', () => game.scale.refresh());
window.addEventListener('load', () => { game.scale.refresh() });