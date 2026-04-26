# Mr.Whisky CIS 品牌規範參考站

> Mr.Whisky 威士忌先生 — 品牌視覺與語氣規範參考站

## 線上網址

- 正式站：https://cis.mrwhisky.tw（Phase 2 上線後）
- 預設站：https://[USERNAME].github.io/mrwhisky-cis/（GitHub Pages 預設網址）

## 本機預覽

```bash
open index.html
```

> ⚠️ **本機 file:// 開啟時複製按鈕可能失敗**（瀏覽器安全限制）。如要驗證複製功能，請改用 HTTP server：
> ```bash
> python3 -m http.server 8000
> # 開啟 http://localhost:8000
> ```

或用任何 HTTP server：

```bash
python3 -m http.server 8000
# 開啟 http://localhost:8000
```

## 結構

```
.
├── index.html          首頁（6 卡片導覽）
├── colors.html         🎨 色彩
├── typography.html     🔤 字體
├── assets.html         🖼️ 品牌素材（logo / 輔圖）
├── photography.html    📷 產品攝影風格
├── social.html         📱 社群貼文範本（v2）
├── tone.html           ✍️ 文案語氣
├── style.css           全站共用樣式（Editorial Dark 主題）
├── copy.js             複製 URL / HEX 互動
└── assets/
    ├── logos/          Logo 變體（PNG、SVG）
    ├── illustrations/  輔助圖
    ├── photos/         產品攝影參考
    └── social/         社群版型範本（v2）
```

## 維護常見動作

### 新增一個 logo 變體

1. 把 PNG 放到 `assets/logos/logo-XXX.png`
2. 編輯 `assets.html`，複製現有的 `<div class="asset-card">` 區塊改成新的（修改 `src`、標題、用途、按鈕內 path）
3. Commit：`git add assets.html assets/logos/logo-XXX.png && git commit -m "feat: add XXX logo variant"`
4. Push：`git push`（Phase 2 後 GitHub Pages 自動部署）

### 修改色彩規範

編輯 `colors.html` 內的 `<div class="swatch-card">` 區塊。

### 新增區段（例如「包裝設計」）

1. 複製 `tone.html` 改名為 `packaging.html`
2. 修改內容
3. **重要：** 在 7 個既有 HTML 檔的 `<nav class="menu">` 區塊內加上新連結 `<a href="packaging.html">包裝</a>`
4. 在 `index.html` 的 `.card-grid` 加上對應卡片

> 維護負擔提醒：新增區段需手動同步 7 個檔的導覽列。如果未來區段超過 12 個，再考慮導入 SSG 工具。

## 部署

GitHub Pages 自動從 `main` branch 部署。本機 push 後約 1-2 分鐘生效。

## 設計規格

完整設計決策見：`../docs/superpowers/specs/2026-04-26-mrwhisky-brand-cis-design.md`
