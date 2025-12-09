import { WindowNostr } from "nostr-tools/nip07"

declare global {
    interface Window {
        nostr?: WindowNostr;
    }
}

export function login_nostr_nip7() {

}
