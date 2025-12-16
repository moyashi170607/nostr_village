import * as NostrTools from "nostr-tools";
import { EventTemplate } from "nostr-tools";


/**
 * 区間の状態を表すJSON
 *
 * @export
 * @interface HouseJSON
 */
export interface HouseJSON {
    house_image: string,
    house_size: { w: number, h: number },
    house_name: string,
    position: { x: number, y: number },
    greeting: string,
    version: string
}


/**
 * 家の持ち主のプロフィール
 *
 * @export
 * @interface OwnerProfile
 */
export interface OwnerProfile {
    pubkey: string,
    name: string,
    display_name: string,
    picture: string,

}

/**
 * 区間の状態を保存するイベント
 */
export class Kind38538Event implements EventTemplate {
    kind: number = 38538;
    content: string = "";
    tags: string[][] = [];
    created_at: number = Math.floor(Date.now() / 1000);

    constructor(house_json: HouseJSON) {
        this.content = JSON.stringify(house_json);

        this.created_at = Math.floor(Date.now() / 1000);
    }
}
