//ver2 破壊的変更あり

//引数propsの型定義
export interface BtnPropsIn {
    width?: number
    height?: number
    onClick?: any
    align?: string
    fontSize?: number
    color?: string
    strokeColor?: any
    strokeSize?: number
    backgroundColor?: number
    padding?: number
}

/**
 * テキストボタン
 */
export class Button extends Phaser.GameObjects.Container {

    text: Phaser.GameObjects.Text
    box: Phaser.GameObjects.Rectangle

    constructor(scene: any, x: number, y: number, text: string, props: BtnPropsIn) {
        super(scene, x, y);

        const {
            width = 90,
            height = 40,
            onClick,
            align = "center",
            fontSize = 30,
            color = "black",
            strokeColor = "white",
            strokeSize = 2,
            backgroundColor = "0X9314FF",
            padding = 5
        } = props;

        this.scene = scene;
        this.scene.add.existing(this);

        this.setSize(width, height);
        this.setInteractive({ useHandCursor: true });

        const alignLeft = align === "left";

        this.text = scene.add.text(alignLeft ? -width / 2 + 0 : 0, -1, text, { align, fontSize }).setOrigin(alignLeft ? 0 : 0.5, 0.5).setPadding(0, 2, 0, 0)
        this.text.setColor(color)
            .setPadding(padding);

        this.box = scene.add.rectangle(0, 0, width, height, backgroundColor, 1);
        this.box.setStrokeStyle(strokeSize, strokeColor).setOrigin(alignLeft ? 0 : 0.5, 0.5)

        this.setScale(1.0, 1.0)

        this.on('pointerover', () => {
            this.pointerOver();
        })

        this.on('pointerout', () => {
            this.pointerOut();
        })

        this.add([this.box, this.text])

        this.on('pointerup', () => {
            this.onClick();
        });


    }

    /**
     * オーバーライド
     */
    onClick(): void {

    }

    pointerOver() {
        this.setScale(1.1, 1.1)
    }

    pointerOut() {
        this.setScale(1.0, 1.0)
    }

}


/**
 * 画像ボタン
 */

export class ImageButton extends Phaser.GameObjects.Image {

    scene: Phaser.Scene;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
        super(scene, x, y, texture);

        this.scene = scene

        this.setInteractive({ useHandCursor: true });

        this.setScale(1.0, 1.0)

        this.on('pointerover', () => {
            this.pointerOver();
        })

        this.on('pointerout', () => {
            this.pointerOut();
        })

        this.on('pointerup', () => {
            this.onClick();
        });

        this.scene.add.existing(this);
    }

    /**
     * オーバーライドしてクリック後の処理を定義
     */
    onClick(): void {

    }

    pointerOver() {
        this.setScale(1.1, 1.1)
    }

    pointerOut() {
        this.setScale(1.0, 1.0)
    }
}


interface MyCusutom {
    fadeInText: {
        (
            scene: any,
            text: string,
            x: number,
            y: number,
            time: number,
            style: any)
            : Phaser.GameObjects.Text
    }
    fadeOutText: {
        (
            scene: any,
            text: string,
            x: number,
            y: number,
            time: number,
            style: any)
            : Phaser.GameObjects.Text
    }
    setDepth: {
        (zIndex: any): void
    }
    Random_num: {
        (max: number, min: number): number
    }
    getDistance: {
        (a: any, b: any): number
    }
}

/**
 * 便利関数集め
 */
export let Custom: MyCusutom = {
    fadeInText: function (scene, text, x, y, time, style) {
        let that = scene.add.text(x, y, text, style);

        that.setAlpha(0).setOrigin(0.5, 0.5).setPadding(0, 4, 0, 0);
        scene.tweens.add({
            targets: that,
            alpha: 1,
            duration: time * 1000,
            ease: 'Power2'
        }, scene);
        return that
    },

    fadeOutText: function (scene, text, x, y, time, style) {
        let that = scene.add.text(x, y, text, style).setPadding(0, 4, 0, 0);;

        that.setAlpha(1).setOrigin(0.5, 0.5);

        scene.tweens.add({
            targets: that,
            alpha: 0,
            duration: time * 1000,
            ease: 'Power2'
        }, scene);

        return that
    },

    setDepth: function (zIndex) {
        zIndex.forEach(function (element: Phaser.GameObjects.Components.Depth, index: number) {
            element.depth = index;
        }
        );
    },

    Random_num: function (max, min) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    },

    getDistance: function (a, b) {
        const Aposition = {
            x: a.x,
            y: a.y
        }

        const Bposition = {
            x: b.x,
            y: b.y
        };

        const distance =
            Math.sqrt(
                Math.pow(Aposition.x - Bposition.x, 2)
                +
                Math.pow(Aposition.y - Bposition.y, 2)
            );

        return distance;
    }
}