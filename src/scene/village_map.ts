import { VillageCameraMoveZone } from "../camera/village_camera_move_zone";
import { LandMap } from "../map/land_map"

export class VillageMap extends Phaser.Scene {
    landMap!: LandMap;
    camera_move_area!: VillageCameraMoveZone

    constructor() {
        super({ key: "village_map", active: true })
    }

    preload() {

    }

    create() {
        this.landMap = new LandMap(this, 0, 0)

        this.cameras.main.setPosition(0, 0)
        this.cameras.main.setZoom(1, 1)

        this.camera_move_area = new VillageCameraMoveZone(this, 0, 0, this.cameras.main)
    }

}