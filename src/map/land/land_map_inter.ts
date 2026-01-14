export interface LandGridObj {
    //注目状態か
    isFocus: boolean

    //座標
    gridX: number
    gridY: number

    //注目状態にする
    setFocus(isFocus: boolean): void
}