import { SimplePool } from "nostr-tools";
import { SubCloser } from "nostr-tools/abstract-pool";
import { relay } from "./nostr";

export function get_event_house() {
    const HOUSE_KIND: number = 38528

    const pool = new SimplePool()

    const sub: SubCloser = pool.subscribe(
        relay,
        {
            kinds: [HOUSE_KIND],
            limit: 0,
            //"#p": [PK_HEX] //自分がメンションされているものを取得
        },
        {
            // 新しいイベントが届くたびに実行
            async onevent(event) {

            },
            // リレーが既存のイベントをすべて送信し終えたときに実行
            oneose() {
                //console.log('End of stored events.');
                // 購読を終了したい場合はここで sub.close() を呼び出す
                // sub.close();
            },
        }
    );
}

export function getRelayList(pubkey: string) {
    //const RELAY_KIND: number
}

export function getOwnerProfile(pubkey: string) {
    const PROFILE_KIND: number = 0

    const pool = new SimplePool()

    const sub: SubCloser = pool.subscribe(
        relay,
        {
            kinds: [PROFILE_KIND],
            limit: 1,
            authors: [pubkey]
        },
        {
            // 新しいイベントが届くたびに実行
            async onevent(event) {

            },
            // リレーが既存のイベントをすべて送信し終えたときに実行
            oneose() {
                //console.log('End of stored events.');
                // 購読を終了したい場合はここで sub.close() を呼び出す
                // sub.close();
            },
        }
    );
}