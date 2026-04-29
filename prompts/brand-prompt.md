# Mr.Whisky 品牌設計 Prompt 速查

> 之後叫 Claude 做網頁/DM/海報/落地頁時，把這份貼進對話開頭，或說「依照 `mrwhisky-brand-prompt.md`」即可。

---

## 品牌核心

- **品牌名**：Mr.Whisky 威士忌先生
- **標語**：Discover your fine & rare bottle
- **業務**：精品與稀有威士忌零售、企業包桶、品酒會
- **客群**：高消費力、注重質感、企業贈禮買家
- **CIS 規範站**：https://mrwhisky-steve.github.io/mrwhisky-cis/

## 色票（必用）

| 角色 | HEX | 用途 |
|---|---|---|
| 暖棕（主視覺） | `#D2A475` | 標題重點、CTA 邊框、金色點綴 |
| 深灰 | `#3E3A39` | 中性元素 |
| 米色（紙感） | `#F6F1D6` / `#F5F1E8` | 主文字（深底時）、紙質背景（淺底時）|
| 深綠（品牌記憶色） | `#002504` | **每件物料都要出現**，加深顧客對深綠的品牌記憶；用於紙袋、印刷物的大面積色塊，網頁/社群可用作 accent、底色條、邊線、按鈕、註腳、標籤等任意位置 |
| 深背景（Editorial Dark） | `#1A1410` | 主視覺背景 |
| 卡片底 | `#2A201A` | 區塊分隔 |
| 邊線 | `#3D2F24` | hairline rule |

**禁用**：紫色漸層、純黑 `#000`、純白 `#FFF`（請改用米色）。

## 字體

- **標題**：Noto Serif TC、Georgia、Songti TC（襯線）
- **內文**：PingFang TC、系統 sans
- **英文襯線飾字**：EB Garamond、Cormorant Garamond（義式斜體適合「Twenty-Five」這類 display）
- **Logo 標準字為訂製版本，請勿自行重製**（直接用 PNG 引用）

## 設計風格（Editorial Dark）

- **整體調性**：精品拍賣型錄、葡萄酒清單、Sotheby's / Hedonism Wines / The Whisky Exchange
- **排版**：不對稱、雜誌式、左圖右文或細長分欄
- **留白**：戲劇性、敢空大片
- **線條**：1px 細線分隔（用 `--border` 色），不用粗邊框
- **層次**：靠字體大小＋斜體＋色彩對比，不靠陰影

## 嚴格禁止（避免 SaaS 化）

- ❌ Inter 全 sans-serif
- ❌ 紫色／藍色漸層 hero
- ❌ 三欄等寬白色方塊卡片＋圓角＋陰影
- ❌ Emoji 當 icon（Steve 嫌醜）
- ❌ 「立即註冊」「開始使用」這類 SaaS 文案
- ❌ 過度動畫、彈跳效果
- ❌ **用文字寫 "Mr.Whisky" 當品牌標誌**——一律使用本檔案「Logo」段落列出的 PNG URL（`<img src="...">`），不可用 CSS 文字、wordmark 重打、或 SVG 模仿替代。Logo 為訂製字體，文字版會破壞識別。

## 文案語氣

- 繁體中文為主，英文 display 文案點綴
- 業界術語：用「配貨」非「綑綁品」、「包桶」非「包桶威士忌」
- 重要事實核對：山崎 25 年酒盒為**黑色硬紙板**，不可寫成木製
- 底部固定：「禁止酒駕 · 未成年請勿飲酒」

## 頁尾統一資訊

- **門市**：
  - 台中市南屯區永春東路 1122-1 號
  - 台北市大安區復興南路一段 141 號
- **聯絡**：
  - Line `@mrwhisky`
  - IG `@mrwhisk_store`
  - Email chx0526@gmail.com
- **版權**：© Mr.Whisky 威士忌先生 · Discover your fine & rare bottle

## 模板檔

- 單品頁起手式：`mrwhisky-template.html`（以山崎 25 為範例）
- CSS 變數已內建，換產品只需改文案、圖、規格表

---

# 📦 品牌素材庫（公開 URL，直接引用）

> CIS 站已部署於 GitHub Pages。以下所有圖檔都有穩定的公開連結，做網頁時用 `<img src="...">` 直接引用即可，不需要重新上傳。

**Base URL**：`https://mrwhisky-steve.github.io/mrwhisky-cis/assets/`

## Logo（9 個變體）

| 用途 | 檔名 | 完整 URL |
|---|---|---|
| 標準橫式 logo | `logo-horizontal.png` | https://mrwhisky-steve.github.io/mrwhisky-cis/assets/logos/logo-horizontal.png |
| 直式堆疊（深色版） | `logo-stacked-dark.png` | https://mrwhisky-steve.github.io/mrwhisky-cis/assets/logos/logo-stacked-dark.png |
| 直式堆疊（暖棕版） | `logo-stacked-tan.png` | https://mrwhisky-steve.github.io/mrwhisky-cis/assets/logos/logo-stacked-tan.png |
| 純黑單色 | `logo-black.png` | https://mrwhisky-steve.github.io/mrwhisky-cis/assets/logos/logo-black.png |
| 純白單色（深底用） | `logo-white.png` | https://mrwhisky-steve.github.io/mrwhisky-cis/assets/logos/logo-white.png |
| 圓形彩色版 | `logo-color-circle.png` | https://mrwhisky-steve.github.io/mrwhisky-cis/assets/logos/logo-color-circle.png |
| 圓角矩形彩色版 | `logo-color-rounded.png` | https://mrwhisky-steve.github.io/mrwhisky-cis/assets/logos/logo-color-rounded.png |
| 英文 wordmark | `wordmark-en.png` | https://mrwhisky-steve.github.io/mrwhisky-cis/assets/logos/wordmark-en.png |
| 中文 wordmark | `wordmark-zh.png` | https://mrwhisky-steve.github.io/mrwhisky-cis/assets/logos/wordmark-zh.png |

**選用原則**：
- 深底 → 用 `logo-white.png` 或 `logo-stacked-tan.png`
- 淺底（米色/白） → 用 `logo-black.png` 或 `logo-stacked-dark.png`
- 社群頭像 → 用 `logo-color-circle.png`
- 大面積品牌主視覺 → 用 `logo-stacked-tan.png`（暖棕在深底最有質感）
- **Logo 為訂製字體，禁止自行重製文字版**

## 輔助圖型（X-pattern · 緞帶 pattern）

主視覺輔助元素，常用在背景紋理、紙袋圖樣、信封內襯、版面點綴。

**緞帶 / X-pattern（aux-pattern）**

| 變體 | URL |
|---|---|
| 暖棕版 | https://mrwhisky-steve.github.io/mrwhisky-cis/assets/illustrations/aux-pattern-tan.png |
| 深綠版 | https://mrwhisky-steve.github.io/mrwhisky-cis/assets/illustrations/aux-pattern-green.png |
| 平鋪 tile | https://mrwhisky-steve.github.io/mrwhisky-cis/assets/illustrations/aux-pattern-tile.png |
| 結構稿 | https://mrwhisky-steve.github.io/mrwhisky-cis/assets/illustrations/aux-pattern-construction.png |

**輔助圖型 2（aux-pattern-2）**

| 變體 | URL |
|---|---|
| 暖棕版 | https://mrwhisky-steve.github.io/mrwhisky-cis/assets/illustrations/aux-pattern-2-tan.png |
| 深綠版 | https://mrwhisky-steve.github.io/mrwhisky-cis/assets/illustrations/aux-pattern-2-green.png |
| 平鋪 tile | https://mrwhisky-steve.github.io/mrwhisky-cis/assets/illustrations/aux-pattern-2-tile.png |
| 應用示意 | https://mrwhisky-steve.github.io/mrwhisky-cis/assets/illustrations/aux-pattern-2-application.png |
| 結構稿 | https://mrwhisky-steve.github.io/mrwhisky-cis/assets/illustrations/aux-pattern-2-construction.png |

**設計概念稿**：https://mrwhisky-steve.github.io/mrwhisky-cis/assets/illustrations/design-concept.png

## 應用範例（8 個品牌物件，做設計時用來對齊調性）

| 物件 | URL |
|---|---|
| 名片 | https://mrwhisky-steve.github.io/mrwhisky-cis/assets/illustrations/logo-application-business-card.png |
| 杯墊 | https://mrwhisky-steve.github.io/mrwhisky-cis/assets/illustrations/logo-application-coaster.png |
| 信封 | https://mrwhisky-steve.github.io/mrwhisky-cis/assets/illustrations/logo-application-envelope.png |
| 活動背板 | https://mrwhisky-steve.github.io/mrwhisky-cis/assets/illustrations/logo-application-event-backdrop.png |
| 禮盒組 | https://mrwhisky-steve.github.io/mrwhisky-cis/assets/illustrations/logo-application-gift-set.png |
| 杯具 | https://mrwhisky-steve.github.io/mrwhisky-cis/assets/illustrations/logo-application-glassware.png |
| 紙袋 | https://mrwhisky-steve.github.io/mrwhisky-cis/assets/illustrations/logo-application-paperbag.png |
| 店面招牌 | https://mrwhisky-steve.github.io/mrwhisky-cis/assets/illustrations/logo-application-storefront.png |

## 攝影素材

- 包桶系列（Springbank 1997 等）：https://mrwhisky-steve.github.io/mrwhisky-cis/photography.html
- 社群拍攝範例（橫式 7 / 直式 3 / 拼接 3）：https://mrwhisky-steve.github.io/mrwhisky-cis/social.html

## 本機原始檔（高解析、印刷用）

線上版是壓縮過的 web 用圖。要印刷／高解析輸出時，原始檔位於：
- `/Users/steve/Desktop/盛閔國際有限公司/公司資料/威士忌先生/LOGO/Mrwhisky相關設計/`
- `/Users/steve/Desktop/盛閔國際有限公司/公司資料/威士忌先生/LOGO/社群媒體拍攝範例/`

---

## 🔧 實際用法範例

**做網頁時直接寫**：

```html
<img src="https://mrwhisky-steve.github.io/mrwhisky-cis/assets/logos/logo-stacked-tan.png" alt="Mr.Whisky" style="height: 80px;">
```

**叫 Claude 設計時的 prompt**：

> 「依照 mrwhisky-brand-prompt.md，做一張山崎 25 年的 IG 直式宣傳圖，logo 用 `logo-stacked-tan.png`、背景用 `aux-pattern-tile.png` 當底紋」

Claude 會直接從上面的 URL 載入圖檔，不需要你再傳。

