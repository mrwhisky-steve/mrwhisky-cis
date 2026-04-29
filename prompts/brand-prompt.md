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
- ❌ **把輔助圖型 `xpattern-{1,2}-{色}.png` 放大當主視覺**（hero 大圖、單張裝飾、佔版面 30%+）— 它只能當「密集小重複 tile（40-80px）」或「底部細邊飾條（24-40px 高）」，詳見下方「輔助圖型」段落。

## 文案語氣

- 繁體中文為主，英文 display 文案點綴
- 業界術語：用「配貨」非「綑綁品」、「包桶」非「包桶威士忌」
- 重要事實核對：山崎 25 年酒盒為**黑色硬紙板**，不可寫成木製
- 底部固定：「禁止酒駕 · 未成年請勿飲酒」

## 頁尾統一資訊

- **門市**：
  - 台中市南屯區市政南二路 185 號(2026-05 底搬遷至永春東路 1122-1 號)
  - 台北市大安區復興南路一段 141 號
- **聯絡**：
  - Line `@mrwhisky`
  - IG `@mrwhisky_store` — https://www.instagram.com/mrwhisky_store
  - Email chx0526@gmail.com
- **版權**：© Mr.Whisky 威士忌先生 · Discover your fine & rare bottle

## 模板檔

- 單品頁起手式：`mrwhisky-template.html`（以山崎 25 為範例）
- CSS 變數已內建，換產品只需改文案、圖、規格表

---

# 📦 品牌素材庫（公開 URL，直接引用）

> CIS 站已部署於 GitHub Pages。以下所有圖檔都有穩定的公開連結，做網頁時用 `<img src="...">` 直接引用即可，不需要重新上傳。

**Base URL**：`https://mrwhisky-steve.github.io/mrwhisky-cis/assets/`

## Logo（10 種形態 × 4 色 = 40 個變體）

統一命名 schema：`{形態}-{色號}.png`

**形態（10 種）**：
| 形態 | 用途 |
|---|---|
| `mark` | 純標誌（圓圈+S 緞帶，無文字） |
| `wordmark-en` | 單獨「Mr.Whisky」英文 |
| `wordmark-zh` | 單獨「威士忌先生」中文 |
| `combo-h-en` | logo + Mr.Whisky 橫排 |
| `combo-h-zh` | logo + 威士忌先生 橫排 |
| `combo-v-en` | logo 上 / Mr.Whisky 下 直式 |
| `combo-v-zh` | logo 上 / 威士忌先生 下 直式 |
| `combo-v-full` | logo / Mr.Whisky / 威士忌先生 三層直式 |
| `combo-v-full-reverse` | logo / 威士忌先生 / Mr.Whisky 三層（順序顛倒） |
| `combo-v-tall` | 中文垂直書寫超細長版 |

**色號（4 色）**：
- `charcoal` `#3E3A39` — 淺底用（取代純黑）
- `tan` `#D2A475` — 主視覺、燙金、CTA
- `green` `#002504` — **品牌記憶色**，每件物料必出現
- `cream` `#F5F1E8` — 深底用（取代純白）

**Base URL**：`https://mrwhisky-steve.github.io/mrwhisky-cis/assets/logos/`

舉例：
- `combo-h-en-tan.png` — 暖棕橫式 logo+英文
- `combo-v-full-cream.png` — 米色三層直式（深底用）
- `mark-green.png` — 深綠純圖標

**選用原則**：
- 網頁 header / 招牌 → `combo-h-en-{色}` 或 `combo-h-zh-{色}`
- 主視覺、海報、禮盒 → `combo-v-full-{色}` 或 `combo-v-en-{色}`
- 社群頭像 → `mark-{色}` 配色塊背景
- 書脊／酒櫃側貼／IG Story 直幅 → `combo-v-tall-{色}`
- 深底 → `cream` 或 `tan` 色號
- 淺底 → `charcoal` 或 `tan` 色號
- 大面積品牌主視覺 → `tan`（暖棕在深底最有質感）

**禁用變體**：
- ❌ logo + Mr.Whisky + 威士忌先生 三元素全部排成一條橫排（破壞留白質感）
- ❌ 純黑（用 `charcoal`）、純白（用 `cream`）
- ❌ **Logo 為訂製字體，禁止自行重製文字版**

**向後相容**（舊 URL 仍可用）：`logo-white.png` = `combo-h-en-cream.png`、`logo-black.png` = `logo-horizontal.png` = `combo-h-en-charcoal.png`、`wordmark-en.png` = `wordmark-en-charcoal.png`、`wordmark-zh.png` = `wordmark-zh-charcoal.png`

## 輔助圖型（XPattern 1 · XPattern 2）

兩款品牌輔助圖型，皆從原 LOGO 拆解後重新組合為對稱單元。每款 4 色變體。

**Base URL**：`https://mrwhisky-steve.github.io/mrwhisky-cis/assets/illustrations/`

| Pattern | 形狀 | URL |
|---|---|---|
| **XPattern 1** | 蝴蝶緞帶對稱型（4 條 M 緞帶上下左右鏡像） | `xpattern-1-{色}.png` |
| **XPattern 2** | X 形花紋對稱型（4 個 S 緞帶旋轉鏡像） | `xpattern-2-{色}.png` |

> `xpattern-{1,2}-element-{色}.png` 是拆解零件，**不是** pattern 主視覺。

### ⚠️ 用法守則（最常出錯的地方）

輔助圖型只能作為「點綴」或「重複底紋」使用，**禁止單張放大當主視覺**。

**✅ 正確 A — XPattern 2 中型 tile**（單元 60-100px，杯墊／信封／背板）
```css
background-image: url('https://mrwhisky-steve.github.io/mrwhisky-cis/assets/illustrations/xpattern-2-tan.png');
background-size: 64px 64px;
background-repeat: repeat;
```

**✅ 正確 B — XPattern 1 小型密集 tile**（單元 36-50px，紙袋內襯／書封背紋）
```css
background-image: url('https://mrwhisky-steve.github.io/mrwhisky-cis/assets/illustrations/xpattern-1-tan.png');
background-size: 44px 44px;
background-repeat: repeat;
```

**✅ 變體 C — 底部細邊飾條**（紙袋下沿，高度 24-40px）
```html
<div style="
  height: 32px;
  background-image: url('https://mrwhisky-steve.github.io/mrwhisky-cis/assets/illustrations/xpattern-1-tan.png');
  background-size: 24px 24px;
  background-repeat: repeat-x;
"></div>
```

**❌ 禁止**：把單一 `xpattern-{1,2}-{色}.png` 放大當 hero／單張裝飾／佔版面 30%+。判斷：尺寸 > 120px 就先停下來。

**權威範例（CIS 規範「排列組合」官方示意，對齊這個密度）**：
- `xpattern-1-tile-spec.png`
- `xpattern-2-tile-spec.png`

**實體應用**：`logo-application-coaster.png`、`logo-application-paperbag.png`、`logo-application-envelope.png`

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
<!-- 深底 hero 用米色三層直式 -->
<img src="https://mrwhisky-steve.github.io/mrwhisky-cis/assets/logos/combo-v-full-cream.png" alt="Mr.Whisky" style="height: 200px;">

<!-- 淺底 header 用深灰橫式 -->
<img src="https://mrwhisky-steve.github.io/mrwhisky-cis/assets/logos/combo-h-en-charcoal.png" alt="Mr.Whisky" style="height: 48px;">
```

**叫 Claude 設計時的 prompt**：

> 「依照 mrwhisky-brand-prompt.md，做一張山崎 25 年的 IG 直式宣傳圖，logo 用 `logo-stacked-tan.png`、背景用 `aux-pattern-tile.png` 當底紋」

Claude 會直接從上面的 URL 載入圖檔，不需要你再傳。

