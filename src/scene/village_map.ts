import { VillageCameraMoveZone } from "../camera/village_camera_move_zone";
import { InfoBox } from "../UI/infobox/info_box";
import { HouseImage } from "../map/house";
import { LandMap } from "../map/land_map"
import { HouseInfo } from "../UI/infobox/house_info";
import { VacantInfo } from "../UI/infobox/vacant_info";


/**
 * 村のマップを表示するシーン
 *
 * カスタムイベント一覧
 * - land_grid_focus 区間選択時
 * - land_grid_unfocus 区間選択解除時
 *
 * @export
 * @class VillageMap
 * @extends {Phaser.Scene}
 */
export class VillageMap extends Phaser.Scene {
    landMap!: LandMap;
    cameraMoveArea!: VillageCameraMoveZone
    infoBox!: InfoBox

    constructor() {
        super({ key: "village_map", active: true })
    }

    preload() {

    }

    create() {
        this.landMap = new LandMap(this, 0, 0)

        this.cameras.main.setPosition(0, 0)
        this.cameras.main.setZoom(1, 1)

        this.cameraMoveArea = new VillageCameraMoveZone(this, 0, 0, this.cameras.main)

        this.infoBox = new VacantInfo(this, 100, 100)
        this.infoBox.visible = true

        new HouseImage(this, 7, 3)
    }

}