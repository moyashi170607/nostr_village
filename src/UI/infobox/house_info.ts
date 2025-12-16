import Phaser from "phaser";
import { GAME_DEFAULT_HEIGHT, GAME_DEFAULT_WIDTH } from "../../main";
import { InfoBox } from "./info_box";

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
 * @class HouseInfo
 * @extends {InfoBox}
 */
export class HouseInfo extends InfoBox {
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
    //家の画像
    houseImage!: Phaser.GameObjects.Image

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y)

        this.homeNameText = this.scene.add.text(10, 10, "こつ子ハウス", HOME_NAME_TEXT_STYLE)
        this.ownerText = this.scene.add.text(10, 60, "こつ子", OWNER_TEXT_STYLE)
        this.pubkeyText = this.scene.add.text(10, 110, "公開鍵", PUBKEY_TEXT_STYLE)
        this.greetingText = this.scene.add.text(10, 160, "一言コメント", GREETING_TEXT_STYLE)
        this.positionText = this.scene.add.text(10, 260, "住所（x,y）", POSITION_TEXT_STYLE)

        //TODO 画像のパス
        this.iconImage = this.scene.add.image(300, 400, "icon")
        this.houseImage = this.scene.add.image(50, 400, "house")


        this.add([
            this.homeNameText,
            this.ownerText,
            this.pubkeyText,
            this.greetingText,
            this.positionText,
            this.iconImage,
            this.houseImage
        ])

        this.scene.add.existing(this)
    }
}