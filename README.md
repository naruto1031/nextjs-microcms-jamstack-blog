# Next.jsを用いた自作ブログ(MicroCMS)
Jemstackなブログを作成しました。
ブログはこちらから閲覧できます。<br>
https://nextjs-microcms-jamstack-blog-pi.vercel.app/

## **使用技術**
- Next.js
- Sass
- MicroCMS
- vercel

## **ローカル環境**
Clone後はnpm install を忘れずに

ローカルサーバを立ち上げる
```powershell
npm run dev
```
ビルド
```powershell
npm run build
```
ビルドしたサイトの確認
```
npm start
```

## **登場した単語の解説**
## Jemstack
Webサーバを存在させずにサイトを運用する構成のこと

アメリカの企業である、Netlify社によって定義された単語
- J: javascript
- A: API
- M: Markup
- Stack: システム構成

の文字及び単語の組み合わせである。※現在は捉え方の拡張によって、定義上はJavaScriptとAPIは必須ではなくなった(らしい)

### ★Jemstackでない構成とは
- Server Side Rendering
- Client Side rendering
  - SPA(Single Page Application)とも呼ばれる

上記のシステム構成には、必ずWebサーバーが必要になる。そのため、大量アクセスに弱く、脆弱性への大量に非常にコストががかかる。

### ★Jemstackのメリット
- 従来の方法と違い、生成済みのページを処理を挟むことなく返却するので、アクセスの付加強くなる
- 閲覧者から見ると、Webサーバが存在していないため、安全性を保つことが比較的容易になる
  - 静的なためクロスサイトスクリプティング(XSS)などのユーザー入力に影響や個別サーバーの脆弱性の影響を受けにくい

## ESLint
ESLint（イーエスリント）は、JavaScriptの静的検証ツールの1つで、コードの品質を向上させるために使用される。

ESLintは、コードのスタイル、潜在的なエラー、不要なコード、アクセシビリティの問題など、さまざまな側面でコードを検証することができる。設定可能なルールを提供し、開発者が自分たちのコードに適したルールを選択できるようになっている。ESLintは、コマンドラインから実行することも、開発環境に統合することもできる。また、ESLintは、プラグインを使用して、特定のフレームワークやライブラリに適したルールを追加することできる。
