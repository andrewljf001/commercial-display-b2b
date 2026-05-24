# commercial-display-b2b

## 项目概述

本仓库用于开发**商业显示屏 B2B 推广网站**，面向海外企业采购商，核心功能为 WhatsApp 在线实时对接，成交路径为线下汇款。

## 网站信息

| 字段 | 内容 |
|------|------|
| 项目类型 | B2B 静态推广网站 |
| 目标受众 | 海外商显采购商（零售商、集成商、工程商） |
| 核心卖点 | LED/LCD 商显、广告机、拼接屏、会议屏 |
| 对接方式 | WhatsApp 在线实时沟通 |
| 成交方式 | 线下汇款（T/T 电汇） |
| 仓库地址 | https://github.com/andrewljf001/commercial-display-b2b |

## 文件索引

| 文件 / 目录 | 说明 |
|------------|------|
| `src/` | 网站源代码 |
| `src/index.html` | 首页（Hero + 产品概览 + WhatsApp CTA）|
| `src/products.html` | 产品列表页（规格参数、应用场景）|
| `src/about.html` | 公司介绍（资质、工厂、案例）|
| `src/contact.html` | 联系页（WhatsApp 按钮 + 询价表单）|
| `src/css/style.css` | 全局样式 |
| `src/js/main.js` | 交互逻辑（WhatsApp 浮窗、滚动动画）|
| `assets/images/` | 产品图、场景图 |
| `assets/icons/` | 图标资源 |
| `docs/design.md` | 设计规范（色彩、字体、组件）|
| `docs/progress.md` | 项目进度管理 |
| `docs/seo.md` | SEO 关键词与元数据规划 |

## 页面架构

```
首页 (index.html)
├── Hero Section       产品主视觉 + "Chat on WhatsApp" CTA
├── Why Us             核心优势（MOQ低、交期快、定制化）
├── Products Overview  产品卡片（4-6款主力产品）
├── Applications       应用场景（零售、餐饮、酒店、交通）
├── Clients & Cases    客户案例（Logo墙 + 项目图）
└── Footer             联系方式 + WhatsApp 悬浮按钮

产品页 (products.html)
├── 产品分类导航
├── 产品卡片列表（图片 + 规格 + WhatsApp 询价）
└── 定制化说明

公司页 (about.html)
├── 公司简介
├── 工厂图片
├── 认证资质（CE、RoHS、ISO）
└── 团队介绍

联系页 (contact.html)
├── WhatsApp 直达按钮（最显眼位置）
├── 简单询价表单（产品、数量、需求）
└── 邮箱 / 所在地区
```

## 技术栈

- 纯 HTML5 / CSS3 / Vanilla JS（零框架、零依赖）
- GitHub Pages 静态托管
- WhatsApp Business API 悬浮按钮
- Formspree 处理表单（无需后端）

## 里程碑

| 里程碑 | 目标 | 状态 |
|--------|------|------|
| v1.0 | 首页 + 产品页 + WhatsApp 对接上线 | ⏳ 待开始 |
| v1.1 | 公司页 + 联系页 + Formspree 表单 | ⏳ 待开始 |
| v2.0 | 中英双语切换 | ⏳ 规划中 |

## 更新记录

| 日期 | 更新人 | 描述 |
|------|--------|------|
| 2026-05-24 | Claude (Anthropic) | 初始化仓库结构 |

---
**最后更新**：2026-05-24 by Claude (Anthropic)
