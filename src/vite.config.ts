// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    // GitHub Pagesへのデプロイに必須
    // base: '/<リポジトリ名>/' を指定する
    base: './',

    // その他の設定
    plugins: [
        // ...
    ],
    build: {
        // ...
    }
});