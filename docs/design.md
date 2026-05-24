# 设计规范 · commercial-display-b2b

## 品牌定位

**关键词**：专业、可信、现代、工业感
**色调**：深色系科技风（深蓝/深灰 + 橙色强调色）

## 色彩系统

| 用途 | 色值 |
|------|------|
| 主背景 | `#0A0E1A`（深夜蓝）|
| 次背景 | `#111827`（深灰蓝）|
| 主色调 | `#F97316`（科技橙）|
| 强调色 | `#3B82F6`（电光蓝）|
| 正文 | `#E5E7EB`（浅灰白）|
| 辅助文字 | `#9CA3AF`（中灰）|
| 边框/分割 | `#1F2937` |

## 字体

- 英文标题：`Inter` / `Barlow Condensed`（Google Fonts）
- 中文：`Noto Sans SC`
- 代码/数字：`JetBrains Mono`

## 核心组件

### WhatsApp 悬浮按钮
- 固定在右下角，始终可见
- 绿色背景 `#25D366`，白色图标
- 点击直达 WhatsApp 对话（带预设消息）
- 示例链接：`https://wa.me/YOUR_NUMBER?text=Hello%2C+I'm+interested+in+your+commercial+displays`

### 产品卡片
- 图片 → 产品名 → 核心规格（2-3条）→ "Get Quote via WhatsApp" 按钮
- Hover 时橙色边框高亮

### Hero Section
- 全屏背景（产品实拍或渲染图）
- 主标题 + 副标题 + 双 CTA（WhatsApp + 查看产品）

## 响应式断点

| 断点 | 宽度 |
|------|------|
| Mobile | < 768px |
| Tablet | 768px - 1024px |
| Desktop | > 1024px |

## SEO 规划

### 目标关键词（英文）
- `commercial display manufacturer`
- `LED display B2B supplier`
- `digital signage wholesale`
- `indoor outdoor LED screen factory`
- `advertising display screen OEM`

### Meta 标签模板
```html
<title>Commercial Display Manufacturer | LED & LCD Screens B2B Supplier</title>
<meta name="description" content="Professional commercial display manufacturer. LED screens, digital signage, video walls. Contact us via WhatsApp for B2B pricing.">
```
