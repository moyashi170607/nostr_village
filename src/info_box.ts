import Phaser from "phaser";
import { GAME_DEFAULT_HEIGHT, GAME_DEFAULT_WIDTH } from "./main";


/**
 * 家の情報を表示するボックス
 *
 * @export
 * @class InfoBox
 * @extends {Phaser.GameObjects.Container}
 */
export class InfoBox extends Phaser.GameObjects.Container {
    //背景ボックス
    backRect!: Phaser.GameObjects.Rectangle
    //家の名前
    homeNameText!: Phaser.GameObjects.Text
    //持ち主の名前
    ownerText!: Phaser.GameObjects.Text
    //一言コメント
    greetingText!: Phaser.GameObjects.Text
    //座標
    positionText!: Phaser.GameObjects.Text

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y)

        this.setScrollFactor(0)


        //色を設定
        const BACK_FILL_COLOR: number = 0xe3e3e3;
        const BACK_STROKE_COLOR: number = 0x404040;

        this.backRect = this.scene.add.rectangle(30, 5, GAME_DEFAULT_WIDTH / 2.5, GAME_DEFAULT_HEIGHT - 30, BACK_FILL_COLOR)
        this.backRect.setStrokeStyle(5, BACK_STROKE_COLOR);
        this.backRect.setDepth(5)
        this.backRect.setOrigin(0, 0)



        //this.scene.add.existing(this.backRect)


        this.add([
            this.backRect
        ])

        this.scene.add.existing(this)
    }
}