# Mirai Sato Portfolio Site

自分のスキルや経歴、制作したプロジェクトを紹介するためのポートフォリオサイトです。
タイピングアニメーションやタブ切り替え、スライダーなどを用いて、視覚的にも分かりやすく情報を伝えます。

## 🚀 デプロイURL
https://miraisato-dev.github.io/portfolio-site/

## 🛠 使用技術
- **Markup:** HTML5
- **Styling:** CSS3
- **Scripting:** JavaScript (Vanilla JS / jQuery)
- **Libraries:**
  - [Typed.js](https://mattboldt.com/demos/typed-js/) (ヒーローセクションのタイピング演出)
    -　選定理由：ドキュメントが充実しており、軽量かつカスタマイズ性が高いため採用
  - [Slick.js](https://kenwheeler.github.io/slick/) (プロジェクトセクションのスライダー)
    - 選定理由：スライド実装のスタンダードであり、スマホ時のスワイプ操作の安定性が高いため採用
  - [Google Fonts](https://fonts.google.com/) (Inter, Noto Sans JP, Space Grotesk)

## ✨ 主な機能
- **Responsive Design:** PC、タブレット、スマートフォンそれぞれのデバイスに最適化したレイアウト。
- **Interactive Navigation:** ハンバーガーメニューの実装およびページ内スムーススクロール。
- **Experience Tabs:** 職歴を切り替えて表示するインタラクティブなタブ機能。
- **Project Slider:** 制作実績をスライド形式で閲覧可能。

## こだわったところ
- **BEM設計思想に基づくコーディング:**
  CSSの肥大化を防ぎ、再利用性と保守性を高めるためにBEM（Block Element Modifier）ルールを導入。全てのクラス名を設計段階で紙に書き出し、HTML構造とスタイルの関係を視覚的に整理してから実装に入りました。
- **UI/UX:**
  憧れのデザインをベースにしつつ、スマートフォン版での操作性を独自に追求。特にモバイル環境でのレイアウトの崩れを排除し、レスポンシブ時の挙動を安定にしました。
- **インタラクティブな仕掛け**
  タイピングエフェクトや波紋エフェクトなど、ユーザーの視線を誘導するJS演出を盛り込みました。

## 🛠 現在取り組んでいる課題 (Current Challenges)
- **Canvas APIを用いたダイナミック・ヒーローセクション:**
  現在、サイトの第一印象を形作るHero Image部分にCanvasを用いたアニメーションを実装中です。JavaScriptで製作中で数式に基づいた粒子の動きやインタラクションを試行錯誤しており、完成次第、メインコンテンツと横並び（2カラムレイアウト）にアップデート予定です。
- **フレームワークへの移行と拡張性**
  現在はHTML軸の構成ですが、今後のPython/FlaskやRailsでの成果物増加を見越し、コンポーネントベースのフレームワークへ移行予定。プロジェクト管理の動的化（DB連携）を目指します。

## 📂 ディレクトリ構成
.
├── index.html        # メインのHTMLファイル
├── css/
│   ├── reset.css     # ブラウザのデフォルトスタイルリセット
│   └── style.css     # メインのデザイン定義
├── js/
│   └── main.js       # アニメーションやタブ切り替えのロジック
├── images/           # プロジェクト画像やロゴ素材
└── assets/
    └── pdf/          # 履歴書(CV)などのドキュメント
