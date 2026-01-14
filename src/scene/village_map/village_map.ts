import { VillageCameraMoveZone } from "../../camera/village_camera_move_zone";
import { InfoBox } from "../../UI/infobox/info_box";
import { HouseImage } from "../../map/house";
import { LandMap, MapData } from "../../map/land/land_map"
import { HouseInfo } from "../../UI/infobox/house_info";
import { VacantInfo } from "../../UI/infobox/vacant_info";
import { HouseJSON, OwnerProfile } from "../../nostr/event";
import { Building, InfoBoxUI } from "./village_map_inter";


/**
 * Description placeholder
 *
 * - hiden どれも表示しない
 * - vacant 空地情報表示
 * - house 住宅情報表示
 *
 * @enum {number}
 */
enum InfoBoxMode {
    hiden,
    vacant,
    house
}

/**
 * 村のマップを表示するシーン
 *
 * カスタムイベント一覧
 * - land_grid_focus 区間選択時
 * - land_grid_unfocus 区間選択解除時
 * 
 * 影響を受けるイベント
 * - land_grid_focus
 * - land_grid_unfocus
 *
 * @export
 * @class VillageMap
 * @extends {Phaser.Scene}
 */
export class VillageMap extends Phaser.Scene {
    landMap!: LandMap;
    cameraMoveArea!: VillageCameraMoveZone
    houseInfoBox!: InfoBoxUI
    vacantInfoBox!: InfoBoxUI

    houseList!: Building[]

    infoBoxMode: InfoBoxMode = InfoBoxMode.hiden;

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



        this.houseInfoBox = new HouseInfo(this, 100, 100)
        this.houseInfoBox.visible = false;

        this.vacantInfoBox = new VacantInfo(this, 100, 100)
        this.vacantInfoBox.visible = false;

        //this.houseList.push(new HouseImage(this, 7, 3));

        this.events.on("land_grid_focus", (gridx: number, gridy: number) => {

        })

        this.events.on("land_grid_unfocus", (gridx: number, gridy: number) => {

        })
    }

    changeBoxMode(mode: InfoBoxMode): void {
        switch (mode) {
            case InfoBoxMode.hiden:
                this.houseInfoBox.visible = false;
                this.vacantInfoBox.visible = false;
                break;

            case InfoBoxMode.vacant:
                this.houseInfoBox.visible = false;
                this.vacantInfoBox.visible = true;
                break;

            case InfoBoxMode.house:
                this.houseInfoBox.visible = true;
                this.vacantInfoBox.visible = false;
                break;
        }
    }

    fetchHouseEvent() {

    }

    getGridInfomation(gridX: number, gridY: number): MapData {
        let info: MapData = this.landMap.mapDataList[gridX][gridY];

        return info;
    }
}