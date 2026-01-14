import Phaser from "phaser";
import { GAME_DEFAULT_HEIGHT, GAME_DEFAULT_WIDTH } from "../../main";
import { InfoBoxUI } from "../../scene/village_map/village_map_inter";

const HOME_NAME_TEXT_STYLE: Phaser.Types.GameObjects.Text.TextStyle = {
    padding: { top: 5 },
    fontSize: 40,
    color: "#000000"
}

const OWNER_TEXT_STYLE: Phaser.Types.GameObjects.Text.TextStyle = {
    padding: { top: 5 },
    fontSize: 35,
    color: "#000000"
}

const PUBKEY_TEXT_STYLE: Phaser.Types.GameObjects.Text.TextStyle = {
    padding: { top: 5 },
    fontSize: 30,
    color: "#000000"
}

const GREETING_TEXT_STYLE: Phaser.Types.GameObjects.Text.TextStyle = {
    padding: { top: 5 },
    fontSize: 30,
    color: "#000000"
}

const POSITION_TEXT_STYLE: Phaser.Types.GameObjects.Text.TextStyle = {
    padding: { top: 5 },
    fontSize: 30,
    color: "#000000"
}


/**
 * 土地の情報を表示するボックスの抽象クラス
 *
 * @export
 * @class InfoBox
 * @extends {Phaser.GameObjects.Container}
 */
export class InfoBox extends Phaser.GameObjects.Container implements InfoBoxUI {
    WIDTH: number = GAME_DEFAULT_WIDTH / 2.5
    HEIGHT: number = GAME_DEFAULT_HEIGHT - 200

    //背景ボックス
    backRect!: Phaser.GameObjects.Rectangle

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y)

        this.WIDTH = GAME_DEFAULT_WIDTH / 2.5
        this.HEIGHT = GAME_DEFAULT_HEIGHT - 200


        this.setScrollFactor(0)
        this.setDepth(20);


        //色を設定
        const BACK_FILL_COLOR: number = 0xe3e3e3;
        const BACK_STROKE_COLOR: number = 0x404040;

        this.backRect = this.scene.add.rectangle(0, 0, this.WIDTH, this.HEIGHT, BACK_FILL_COLOR)
        this.backRect.setStrokeStyle(5, BACK_STROKE_COLOR);
        this.backRect.setOrigin(0, 0)

        this.backRect.setInteractive()

        this.add([
            this.backRect,
        ])

        this.scene.add.existing(this)
    }
}