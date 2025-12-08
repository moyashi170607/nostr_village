# NostrVillage -のす村-

## ゲーム本編リンク
https://moyashi170607.github.io/nostr_village/

## 概要
NostrVillageはNostr上に構築される小さな村です。
NostrVillageでは、ユーザーはマスで区切られた土地の内、1つを入手し、そこに家を建てることができます。

家は任意の画像を用いることができ、自身の個性を充分に発揮することができます。

## できること（仮）
- 空いてる土地を所有できる
- 任意の画像を家として土地に配置できる
- 他のユーザーの家を閲覧できる
- 一言コメントを表示できる

## 生成されるイベント（草案）

### 土地や家の情報を記録するイベント
kind 38528
```
{
  "id": イベントのID,
  "pubkey": イベント作成者の公開鍵(家の持ち主),
  "created_at": タイムスタンプ,
  "kind": 38528,
  "tags": [
  ],
  "content": 後述のHouse型のJSONを文字列化したもの,
  "sig": 電子署名
}
```

House型JSON
```
{
    "house_image":"家の画像を表すリンク",
    "house_size":{w : 家の画像の横幅, h : 家の画像の縦幅},
    "house_name":"家の名前",
    "position":{x : 家のx座標, y : 家のy座標},
    "greeting":"一言コメント",
    "ver":"作成されたときのクライアントのバージョン"
}
```

## 依存パッケージ（抜粋）
- nostr-tools
- phaser3
