export class LandGrid extends Phaser.GameObjects.Rectangle {
    static readonly CELL_WIDTH: number = 150
    static readonly CELL_HEIGHT: number = 150

    static readonly STROKE_COLOR: number = 0x777777

    gridX: number
    gridY: number

    constructor(scene: Phaser.Scene, gridx: number, gridy: number, fill_color: number) {
        super(scene, gridx * LandGrid.CELL_WIDTH, gridy * LandGrid.CELL_HEIGHT, LandGrid.CELL_WIDTH, LandGrid.CELL_HEIGHT, fill_color)

        this.gridX = gridx;
        this.gridY = gridy;

        this.setStrokeStyle(5, LandGrid.STROKE_COLOR)

        this.setOrigin(0, 0)

        //this.setInteractive(true)

        this.scene.add.existing(this)
    }
}