# 黔前Ai助手官网 - 部署指南

## 部署前检查清单

- [ ] 已安装 Node.js 18+
- [ ] 已配置 Vercel 账号
- [ ] 已创建 GitHub 仓库

## 部署步骤

### 1. 本地构建测试

```bash
# 进入项目目录
cd qianqian-ai-website

# 安装依赖
npm install

# 生成静态站点
npm run generate

# 构建成功后，dist 文件夹会生成静态文件
```

### 2. 推送到 GitHub

```bash
# 初始化 Git（如未初始化）
git init

# 添加文件
git add .

# 提交
git commit -m "Initial commit"

# 连接远程仓库
git remote add origin https://github.com/你的用户名/仓库名.git

# 推送
git push -u origin main
```

### 3. Vercel 部署

#### 方式 A：通过 Git 自动部署（推荐）

1. 登录 [vercel.com](https://vercel.com)
2. 点击 "Add New Project"
3. 选择 "Import Git Repository"
4. 授权并选择你的 GitHub 仓库
5. 框架选择 **Nuxt.js**
6. 构建设置：
   - **Build Command**: `nuxt generate`
   - **Output Directory**: `dist`
7. 点击 "Deploy"

#### 方式 B：使用 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
vercel --prod
```

### 4. 配置自定义域名（可选）

1. 在 Vercel Dashboard 进入项目
2. 点击 "Settings" → "Domains"
3. 添加你的域名（如 `www.qianqian-ai.com`）
4. 按提示配置 DNS 记录

### 5. 自动部署

配置完成后，每次推送到 GitHub 的 main 分支，Vercel 会自动重新部署。

---

## 常见问题

### Q: 构建失败怎么办？

检查 `nuxt.config.ts` 配置是否正确，确保模块已安装：
```bash
npm install @nuxtjs/tailwindcss @nuxt/content
```

### Q: 如何更新网站内容？

修改代码后提交到 GitHub：
```bash
git add .
git commit -m "更新内容"
git push
```
Vercel 会自动重新部署。

### Q: 部署后样式丢失？

检查 `tailwind.config.js` 的 `content` 配置是否包含所有文件路径。

---

## 项目结构

```
qianqian-ai-website/
├── .output/          # 构建输出（Nuxt）
├── dist/             # 静态生成输出（部署用这个）
├── .nuxt/            # Nuxt 运行时
├── assets/           # 静态资源
├── components/       # Vue 组件
├── layouts/          # 布局
├── pages/            # 页面路由
├── package.json      # 依赖配置
├── nuxt.config.ts    # Nuxt 配置
└── vercel.json       # Vercel 配置
```
