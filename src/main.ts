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
  type: Phaser.WEBGL,
  //parent: "app",
  canvas: document.getElementById("display") as HTMLCanvasElement,
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

function sizeSet() {
  const GAME_CONTENTS: HTMLCanvasElement = document.getElementById("display") as HTMLCanvasElement;
  const GAME_WRAPPER: HTMLElement = document.getElementById("app") as HTMLElement;

  if (!GAME_WRAPPER || !GAME_WRAPPER.parentNode || !GAME_CONTENTS) {
    return;
  }

  const WIDTH: number = (GAME_WRAPPER.parentNode as HTMLElement).clientWidth;

  const DEFAULT_WIDTH: number = GAME_CONTENTS.clientWidth;

  let xScale: number = 1.0;

  xScale = Math.floor(WIDTH / DEFAULT_WIDTH * 100) * 0.01;

  GAME_WRAPPER.style.transform = "scale(" + xScale + "," + xScale + ")";

  console.log(WIDTH)
}

sizeSet()

function checkSmartPhone() {
  const WIDTH: number = window.innerWidth
  const HEIGHT: number = window.innerHeight

  if (WIDTH < HEIGHT) {
    alert("画面を横にしてプレイ推奨です。")
  }
}

checkSmartPhone()

window.addEventListener("resize", sizeSet)
//window.addEventListener("resize", checkSmartPhone)