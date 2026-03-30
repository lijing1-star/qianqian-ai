# 黔前Ai助手官网

基于 Nuxt.js 3 + Tailwind CSS 构建的黔前Ai助手官方网站。

## 功能特性

- **首页** - 产品展示、功能介绍、版本对比、用户评价、FAQ
- **下载页** - 四大版本下载（社区版/政府版/企业版/服务器版）
- **文档页** - 使用文档入口
- **定价页** - 版本定价和功能对比
- **社区页** - 联系方式和支持渠道

## 技术栈

- [Nuxt.js 3](https://nuxt.com/) - Vue 全栈框架
- [Tailwind CSS](https://tailwindcss.com/) - 原子化 CSS
- [Heroicons](https://heroicons.com/) - 图标库
- [TypeScript](https://www.typescriptlang.org/) - 类型支持

## 版本说明

| 版本 | 支持平台 | 定位 |
|------|---------|------|
| 社区版 | Windows、macOS、Linux | 个人免费 |
| 政府版 | UOS | 政务专用 |
| 企业版 | Windows、macOS、Linux、iOS、Android | 企业协作 |
| 服务器版 | Linux、macOS | 私有部署 |

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run generate

# 预览生产版本
npm run preview
```

## 部署

项目配置了 Vercel 部署，推送到 GitHub 后自动部署：

```bash
# 构建静态站点
npm run generate
```

## 项目结构

```
qianqian-ai-website/
├── components/          # Vue 组件
├── layouts/            # 布局组件
├── pages/              # 页面
├── assets/             # 静态资源
├── public/             # 公共文件
├── nuxt.config.ts      # Nuxt 配置
├── tailwind.config.js  # Tailwind 配置
└── package.json        # 项目依赖
```

## 版权信息

© 2024 黔前智算. 保留所有权利.
