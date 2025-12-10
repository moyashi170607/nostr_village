import { GAME_DEFAULT_HEIGHT, GAME_DEFAULT_WIDTH } from "../main"

const LEFT_AREA: number = 80
const RIGHT_AREA: number = 80
const UP_AREA: number = 80
const DOWN_AREA: number = 80

const ALPHA: number = 0.6

const BOX_COLOR: number = 0x525252

export class VillageCameraMoveZone extends Phaser.GameObjects.Container {
    camera: Phaser.Cameras.Scene2D.Camera;
    speed: number = 5;

    pointer: Phaser.Input.Pointer

    //デバッグ用
    debugLeft: Phaser.GameObjects.Rectangle
    debugRight: Phaser.GameObjects.Rectangle
    debugUp: Phaser.GameObjects.Rectangle
    debugDown: Phaser.GameObjects.Rectangle


    constructor(scene: Phaser.Scene, x: number, y: number, camera: Phaser.Cameras.Scene2D.Camera) {
        super(scene, x, y)

        //ポインタを取得
        this.pointer = this.scene.input.activePointer;

        this.camera = camera
        this.setScrollFactor(0)
        this.setDepth(1000)

        // デバッグ用の長方形はそのまま残します (移動チェックには使用しません)
        this.debugLeft = this.scene.add.rectangle(0, 0, LEFT_AREA, GAME_DEFAULT_HEIGHT, BOX_COLOR, ALPHA)
        this.debugLeft.setOrigin(0, 0)
        this.debugRight = this.scene.add.rectangle(GAME_DEFAULT_WIDTH - RIGHT_AREA, 0, RIGHT_AREA, GAME_DEFAULT_HEIGHT, BOX_COLOR, ALPHA)
        this.debugRight.setOrigin(0, 0)
        this.debugUp = this.scene.add.rectangle(0, 0, GAME_DEFAULT_WIDTH, UP_AREA, BOX_COLOR, ALPHA)
        this.debugUp.setOrigin(0, 0)
        this.debugDown = this.scene.add.rectangle(0, GAME_DEFAULT_HEIGHT - DOWN_AREA, GAME_DEFAULT_WIDTH, DOWN_AREA, BOX_COLOR, ALPHA)
        this.debugDown.setOrigin(0, 0)

        this.add([
            this.debugLeft,
            this.debugRight,
            this.debugUp,
            this.debugDown,
        ])

        this.scene.add.existing(this)
    }

    preUpdate() {
        const isPointerActive = this.scene.input.activePointer.isDown;
        if (isPointerActive) {
            // this.scene.input.x は常にゲームキャンバス内のローカル座標を返す。
            const pointerX: number = this.scene.input.activePointer.x;
            const pointerY: number = this.scene.input.activePointer.y;

            console.log("X:" + pointerX + "Y:" + pointerY)

            // X軸の移動チェック
            if (pointerX < LEFT_AREA && pointerX > 0) {
                this.camera.scrollX -= this.speed
            } else if (pointerX > GAME_DEFAULT_WIDTH - RIGHT_AREA && pointerX < GAME_DEFAULT_WIDTH) {
                this.camera.scrollX += this.speed
            }

            // Y軸の移動チェック
            if (pointerY < UP_AREA && pointerY > 0) {
                this.camera.scrollY -= this.speed
            } else if (pointerY > GAME_DEFAULT_HEIGHT - DOWN_AREA && pointerY < GAME_DEFAULT_HEIGHT) {
                this.camera.scrollY += this.speed
            }
        }
    }
}