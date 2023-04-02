# png to webp 変換ツール
---
## セットアップ
依存関係のインストール
```npm i```
---
## 実行
Windows: `convert.bat`
Linux(Bash): `convert.sh`
---
## コンフィグの書き方
```json
{
    "size": {
        "width": null,
        "height": null
    },
    "name_format": "{old_name}_resized"
}
```
size(width/height): px単位での幅と高さ(nullだとそのまま)
name_format: 名前の形式({index}で番号(0から)/{old_name}で前のファイル名)
---
created by ap12