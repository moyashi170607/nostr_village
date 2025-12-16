import Phaser from "phaser";
import { GAME_DEFAULT_HEIGHT, GAME_DEFAULT_WIDTH } from "../../main";
import { InfoBox } from "./info_box";
import { BtnPropsIn, Button } from "../../mphaser";

const UI_TEXT_STYLE: Phaser.Types.GameObjects.Text.TextStyle = {
    padding: { top: 5 },
    fontSize: 40,
    color: "#000000"
}


const PURCAHSE_BUTTON_STYLE: BtnPropsIn = {
    width: 300,
    height: 50,
    backgroundColor: 0xf1ff94
}


/**
 * 家の情報を表示するボックス
 *
 * @export
 * @class VacantInfo
 * @extends {InfoBox}
 */
export class VacantInfo extends InfoBox {
    //家の名前
    uiText!: Phaser.GameObjects.Text

    //購入ボタン
    purchaseButton!: Button

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y)

        this.uiText = this.scene.add.text(10, 10, "この土地は空地です。", UI_TEXT_STYLE)

        this.purchaseButton = new Button(this.scene, this.WIDTH / 2, this.HEIGHT - 100, "この土地を購入する", PURCAHSE_BUTTON_STYLE)

        this.add([
            this.uiText,
            this.purchaseButton
        ])

        this.scene.add.existing(this)
    }
}