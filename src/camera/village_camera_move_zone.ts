import { GAME_DEFAULT_HEIGHT, GAME_DEFAULT_WIDTH } from "../main"

const LEFT_AREA: number = 100
const RIGHT_AREA: number = 100
const UP_AREA: number = 100
const DOWN_AREA: number = 100

const DEAD_ZONE: number = 10


export class VillageCameraMoveZone extends Phaser.GameObjects.Container {
    camera: Phaser.Cameras.Scene2D.Camera;
    speed: number = 5;

    pointer: Phaser.Input.Pointer

    //デバッグ用
    debug_left: Phaser.GameObjects.Rectangle
    debug_right: Phaser.GameObjects.Rectangle
    debug_up: Phaser.GameObjects.Rectangle
    debug_down: Phaser.GameObjects.Rectangle


    constructor(scene: Phaser.Scene, x: number, y: number, camera: Phaser.Cameras.Scene2D.Camera) {
        super(scene, x, y)

        //ポインタを取得
        this.pointer = this.scene.input.activePointer;

        this.camera = camera
        this.setScrollFactor(0)
        this.setDepth(1000)

        // デバッグ用の長方形はそのまま残します (移動チェックには使用しません)
        this.debug_left = this.scene.add.rectangle(0, 0, LEFT_AREA, GAME_DEFAULT_HEIGHT, 0xff0000, 0.3)
        this.debug_left.setOrigin(0, 0)
        this.debug_right = this.scene.add.rectangle(GAME_DEFAULT_WIDTH - RIGHT_AREA, 0, RIGHT_AREA, GAME_DEFAULT_HEIGHT, 0x00ff00, 0.3)
        this.debug_right.setOrigin(0, 0)
        this.debug_up = this.scene.add.rectangle(0, 0, GAME_DEFAULT_WIDTH, UP_AREA, 0x0000ff, 0.3)
        this.debug_up.setOrigin(0, 0)
        this.debug_down = this.scene.add.rectangle(0, GAME_DEFAULT_HEIGHT - DOWN_AREA, GAME_DEFAULT_WIDTH, DOWN_AREA, 0xffff00, 0.3)
        this.debug_down.setOrigin(0, 0)

        this.add([
            this.debug_left,
            this.debug_right,
            this.debug_up,
            this.debug_down,
        ])

        this.scene.add.existing(this)
    }

    preUpdate() {

        // this.scene.input.x は常にゲームキャンバス内のローカル座標を返す。
        const pointerX = this.pointer.x;
        const pointerY = this.pointer.y;

        console.log("pointerX" + pointerX)
        console.log("pointerY" + pointerY)

        // X軸の移動チェック
        if (pointerX < LEFT_AREA && pointerX > 0 + DEAD_ZONE) {
            this.camera.scrollX -= this.speed
            console.log("left")
        } else if (pointerX > GAME_DEFAULT_WIDTH - RIGHT_AREA && pointerX < GAME_DEFAULT_WIDTH - DEAD_ZONE) {
            this.camera.scrollX += this.speed
            console.log("right")
        }

        // Y軸の移動チェック
        if (pointerY < UP_AREA && pointerY > 0 + DEAD_ZONE) {
            this.camera.scrollY -= this.speed
            console.log("up")
        } else if (pointerY > GAME_DEFAULT_HEIGHT - DOWN_AREA && pointerY < GAME_DEFAULT_HEIGHT - DEAD_ZONE) {
            this.camera.scrollY += this.speed
            console.log("down")
        }
    }
}