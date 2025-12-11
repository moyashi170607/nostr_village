import Phaser from "phaser";
import { GAME_DEFAULT_HEIGHT, GAME_DEFAULT_WIDTH } from "./main";

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
    //公開鍵
    pubkeyText!: Phaser.GameObjects.Text
    //一言コメント
    greetingText!: Phaser.GameObjects.Text
    //座標
    positionText!: Phaser.GameObjects.Text
    //アイコン
    iconImage!: Phaser.GameObjects.Image

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y)


        this.setScrollFactor(0)
        this.setDepth(5);


        //色を設定
        const BACK_FILL_COLOR: number = 0xe3e3e3;
        const BACK_STROKE_COLOR: number = 0x404040;

        this.backRect = this.scene.add.rectangle(0, 0, GAME_DEFAULT_WIDTH / 2.5, GAME_DEFAULT_HEIGHT - 200, BACK_FILL_COLOR)
        this.backRect.setStrokeStyle(5, BACK_STROKE_COLOR);
        this.backRect.setOrigin(0, 0)

        this.backRect.setInteractive()

        this.homeNameText = this.scene.add.text(10, 10, "こつ子ハウス", HOME_NAME_TEXT_STYLE)
        this.ownerText = this.scene.add.text(10, 60, "こつ子", OWNER_TEXT_STYLE)
        this.pubkeyText = this.scene.add.text(10, 110, "公開鍵", PUBKEY_TEXT_STYLE)

        this.greetingText = this.scene.add.text(10, 160, "一言コメント", GREETING_TEXT_STYLE)
        this.positionText = this.scene.add.text(10, 260, "住所（x,y）", POSITION_TEXT_STYLE)


        this.add([
            this.backRect,
            this.homeNameText,
            this.ownerText,
            this.pubkeyText,
            this.greetingText,
            this.positionText
        ])

        this.scene.add.existing(this)
    }
}