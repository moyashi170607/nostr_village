import { LandGrid } from "./land_grid";
import * as map_data from './map.json';

export class LandMap extends Phaser.GameObjects.Container {

    map_list: LandGrid[][] = []

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y)

        const CELL_WIDTH = 150;
        const CELL_HEIGHT = 150;

        const X_LENGTH = 10;
        const Y_LENGTH = 10;

        const GRID_WIDTH = X_LENGTH * CELL_WIDTH;
        const GRID_HEIGHT = Y_LENGTH * CELL_HEIGHT;

        // 色の定義
        // 境界線の色
        const lineColor = 0x808080;
        // セルの中の色
        const fillColor = 0x00d415;

        for (let i = 0; i < X_LENGTH; i++) {
            this.map_list[i] = Array(Y_LENGTH)

            for (let l = 0; l < Y_LENGTH; l++) {
                let grid = new LandGrid(this.scene, i, l, fillColor)

                this.map_list[i][l] = grid

            }
        }




        // グリッドをコンテナの中心に配置するための調整 (オプション)
        // grid.setOrigin(0.5, 0.5); // Gridはデフォルトで原点が中心なので不要な場合が多いです

        // コンテナのサイズを設定 (グリッドと合わせる)
        //this.setSize(gridWidth, gridHeight);

        this.scene.add.existing(this)
    }
}