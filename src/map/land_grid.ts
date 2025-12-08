import { GAME_DEFAULT_HEIGHT, GAME_DEFAULT_WIDTH } from "../main"

const DEAD_ZONE: number = 100

export class LandGrid extends Phaser.GameObjects.Rectangle {
    static readonly CELL_WIDTH: number = 150
    static readonly CELL_HEIGHT: number = 150

    static readonly STROKE_COLOR: number = 0x777777
    static readonly STROKE_COLOR_ACTIVE: number = 0xfcf403
    static readonly STROKE_WIDTH: number = 5

    isActive: boolean = false

    gridX: number
    gridY: number

    constructor(scene: Phaser.Scene, gridx: number, gridy: number, fill_color: number) {
        super(scene, gridx * LandGrid.CELL_WIDTH, gridy * LandGrid.CELL_HEIGHT, LandGrid.CELL_WIDTH, LandGrid.CELL_HEIGHT, fill_color)

        this.isActive = false;

        this.gridX = gridx;
        this.gridY = gridy;

        this.setStrokeStyle(LandGrid.STROKE_WIDTH, LandGrid.STROKE_COLOR)

        this.setOrigin(0, 0)

        this.setInteractive({ useHandCursor: true })

        this.on("pointerdown", () => {
            const pointerX = this.scene.input.activePointer.x
            const pointerY = this.scene.input.activePointer.y

            if (pointerX >= DEAD_ZONE && pointerX <= GAME_DEFAULT_WIDTH - DEAD_ZONE &&
                pointerY >= DEAD_ZONE && pointerY <= GAME_DEFAULT_HEIGHT - DEAD_ZONE) {
                if (this.isActive) {
                    this.isActive = false
                    this.setStrokeStyle(LandGrid.STROKE_WIDTH, LandGrid.STROKE_COLOR)
                    this.setDepth(0)
                } else {
                    this.isActive = true;
                    this.setStrokeStyle(LandGrid.STROKE_WIDTH, LandGrid.STROKE_COLOR_ACTIVE)
                    this.setDepth(1)
                }
            }

        })

        this.scene.add.existing(this)
    }
}