import { LandGrid } from "./land_grid";

export class HouseImage extends Phaser.GameObjects.Image {
    gridX: number
    gridY: number

    constructor(scene: Phaser.Scene, gridX: number, gridY: number, image_key: string = "default_house_img") {
        super(scene, gridX * LandGrid.CELL_WIDTH, gridY * LandGrid.CELL_HEIGHT, image_key)

        this.gridX = gridX
        this.gridY = gridY

        this.setOrigin(0, 0)

        this.setDepth(10)

        this.setPosition(this.gridX * LandGrid.CELL_WIDTH, this.gridY * LandGrid.CELL_HEIGHT)

        let zoomScale: number

        if (this.frame.realWidth < this.frame.realHeight) {
            zoomScale = LandGrid.CELL_HEIGHT / this.frame.realHeight;
        }
        else {
            zoomScale = LandGrid.CELL_WIDTH / this.frame.realWidth
        }

        this.setScale(zoomScale)

        this.scene.add.existing(this)
    }


}