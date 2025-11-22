# Minimalist Hiro App

Next.js + TypeScript をベースにした1ページ構成のランディングサイトです。Tailwind などの外部 UI フレームワークを使わず、CSS Modules でモバイルファーストのレイアウトを構築しています。

## project structure

- `app/layout.tsx`：Geistフォントとメタデータを定義しつつ、`<body>`の基本スタイルを引き継ぎます。
- `app/globals.css`：グローバルな色やタイポグラフィの変数、`body`の基本設定を記述。
- `app/page.tsx` & `app/page.module.css`：ページ本体、各セクション（ヘッダー、プロフィール、アプリ一覧、ココシバ紹介、SNSリンク、フッター）とそれぞれのスタイル。アプリ情報・SNSリンク・紹介文などは配列で定義されており、後から差し替え可能です。
- `public/images`：`/images/profile.jpg` と `/images/cocoshiba.jpg` のパスを仮置きしています。実際の画像に差し替えてください。

## Getting Started

1. 依存関係をインストール：

```bash
npm install
```

2. 開発サーバーを起動（ローカルで確認）：

```bash
npm run dev
```

3. ビルド：

```bash
npm run build
```

## Notes for Replacement

- `appProjects` 配列内の `appStoreLink` / `playStoreLink` はすべて `#` です。各アプリの実際の配布先 URL に置き換えてください。
- `socialLinks` 配列の `url` も同様に実データへ更新してください。
- `Image` コンポーネントの `src`（`/images/profile.jpg`, `/images/cocoshiba.jpg`）はダミーです。公開用リソースを `public/images` に追加し、差し替えてください。
- 職業やプロフィール文も自由にカスタマイズ可能です。`introParagraphs` 配列のテキストを加工してください。

## Deployment

Next.js の構成なので、Vercel や GitHub Pages（静的出力）のいずれにも対応可能です。Vercel にデプロイする場合は通常通りリポジトリを接続すれば `npm run build`→`npm run start` でデプロイされます。GitHub Pages へ出すなら `next export` して静的ファイルを配備してください。
