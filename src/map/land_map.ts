import { HouseJSON, OwnerProfile } from "../nostr/event";
import { LandGrid } from "./land_grid";
import * as map_data from './map.json';

export interface MapData {
    houseJSON: HouseJSON,
    owner: OwnerProfile

}


/**
 * 村のマップ
 *
 * @export
 * @class LandMap
 * @typedef {LandMap}
 * @extends {Phaser.GameObjects.Container}
 */
export class LandMap extends Phaser.GameObjects.Container {

    //LandGridオブジェクトの集まり
    mapList: LandGrid[][] = []

    mapDataList: MapData[][] = []

    //今、どの区間が選択されているか
    focus_grid: { gridX: number, gridY: number } | null = null

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y)

        //何マスあるか
        const X_LENGTH = 10;
        const Y_LENGTH = 10;


        // 色の定義
        // セルの中の色
        const fillColor = 0x00d415;

        //マップの区間を生成
        for (let i = 0; i < X_LENGTH; i++) {
            this.mapList[i] = Array(Y_LENGTH)

            for (let l = 0; l < Y_LENGTH; l++) {
                let grid = new LandGrid(this.scene, i, l, fillColor)

                this.mapList[i][l] = grid

            }
        }


        //区間を選択
        this.scene.events.on("land_grid_focus", (gridx: number, gridy: number) => {
            this.mapList[gridx][gridy].setFocus(true)
            this.focus_grid = { gridX: gridx, gridY: gridy }
        })

        //区間の選択を解除
        this.scene.events.on("land_grid_unfocus", (gridx: number, gridy: number) => {
            this.mapList[gridx][gridy].setFocus(false)
            this.focus_grid = null
        })

        this.scene.add.existing(this)
    }
}