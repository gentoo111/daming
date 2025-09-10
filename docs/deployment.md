# 大明朝官网 - 部署文档

## 部署架构

**目标平台**: Cloudflare生态全栈部署
- **Cloudflare Pages**: 前端静态资源托管
- **Cloudflare Workers**: Next.js API Routes自动转换
- **Cloudflare D1**: 数据库（后续阶段）
- **Cloudflare R2**: 文件存储（后续阶段）

## 环境要求

### 本地开发环境
- **Node.js**: 18.x或更高版本
- **Yarn**: 1.22.x（项目指定包管理器）
- **Git**: 最新稳定版

### 云端环境
- **Cloudflare账户**: 免费版即可开始
- **GitHub账户**: 用于代码托管和CI/CD
- **域名**（可选）: 自定义域名

## 项目配置文件

### 环境变量配置
```bash
# .env.local (本地开发)
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000

# Cloudflare相关（后续数据库阶段使用）
DATABASE_URL=your-d1-database-url
CLOUDFLARE_ACCOUNT_ID=your-account-id
CLOUDFLARE_API_TOKEN=your-api-token
```

### Next.js配置优化
```typescript
// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    turbo: true
  },
  output: 'export', // 静态导出模式，适配Cloudflare Pages
  images: {
    unoptimized: true // Cloudflare Pages兼容性
  },
  trailingSlash: true, // URL末尾斜杠处理
}

export default nextConfig
```

### 构建脚本优化
```json
// package.json scripts部分
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "build:cf": "next build && next export",
    "start": "next start",
    "lint": "eslint",
    "type-check": "tsc --noEmit",
    "deploy": "yarn build:cf && npx wrangler pages publish out"
  }
}
```

## GitHub仓库设置

### 1. 创建仓库
```bash
# 在GitHub上创建新仓库: daming-portal
# 不要初始化README、.gitignore或license（项目已有）
```

### 2. 添加远程仓库
```bash
git remote add origin https://github.com/your-username/daming-portal.git
git branch -M main
```

### 3. 首次推送
```bash
git add .
git commit -m "🎉 初始版本：大明帝国官网静态界面完成

- ✨ 完整的古风UI组件系统
- 🏛️ 六部衙门导航架构  
- 📜 皇帝诏书、朝廷动态、臣民奏章
- 🎨 故宫红+金黄古典配色方案
- 🔧 基于Next.js 15 + TailwindCSS 4.0
- 📦 Yarn包管理器统一规范

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"

git push -u origin main
```

## Cloudflare Pages部署

### 1. 连接GitHub仓库
1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 进入 **Pages** 部分
3. 点击 **Create a project**
4. 选择 **Connect to Git**
5. 授权GitHub并选择 `daming-portal` 仓库

### 2. 配置构建设置
```yaml
# Cloudflare Pages构建配置
Build command: yarn build
Build output directory: out
Root directory: /
Environment variables: 
  - NODE_VERSION=18
  - YARN_VERSION=1.22.22
```

### 3. 部署分支设置
- **Production branch**: `main`
- **Preview branches**: `dev`, `staging`（可选）

### 4. 自定义域名（可选）
```
主域名: daming.yourdomain.com
备用域名: www.daming.yourdomain.com
```

## CI/CD工作流程

### 自动部署触发条件
- ✅ `main`分支推送 → 生产环境部署
- ✅ Pull Request → 预览环境部署  
- ✅ 其他分支推送 → 开发环境部署

### 部署流程
1. **代码推送** → GitHub接收更改
2. **自动构建** → Cloudflare Pages触发构建
3. **依赖安装** → `yarn install`
4. **项目构建** → `yarn build`
5. **静态导出** → Next.js生成静态文件
6. **全球部署** → Cloudflare边缘网络分发
7. **部署通知** → 自动生成预览链接

## 部署验证清单

### 构建验证
- [ ] 本地构建成功 (`yarn build`)
- [ ] 无TypeScript错误 (`yarn type-check`) 
- [ ] 代码规范通过 (`yarn lint`)
- [ ] 依赖安全检查 (`yarn audit`)

### 部署验证
- [ ] Cloudflare Pages构建成功
- [ ] 所有页面正常访问
- [ ] 响应式布局正常
- [ ] 静态资源加载正常
- [ ] SEO元数据正确

### 性能验证
- [ ] 首屏加载时间 < 3秒
- [ ] Lighthouse性能评分 > 90
- [ ] 移动端体验良好
- [ ] 全球CDN分发正常

## 环境管理

### 开发环境
- **URL**: http://localhost:3000
- **用途**: 本地开发和测试
- **数据库**: 无（静态页面）

### 预览环境  
- **URL**: https://branch-name.daming-portal.pages.dev
- **用途**: Pull Request预览
- **触发**: 非main分支推送

### 生产环境
- **URL**: https://daming-portal.pages.dev
- **自定义域名**: https://daming.yourdomain.com
- **用途**: 正式对外服务
- **触发**: main分支推送

## 监控和日志

### Cloudflare Analytics
- 页面访问量统计
- 用户地理位置分布  
- 加载性能监控
- 错误率跟踪

### 部署日志
- Cloudflare Pages构建日志
- 部署成功/失败通知
- 预览链接自动生成

## 回滚策略

### 快速回滚
```bash
# 回滚到上一个版本
git revert HEAD
git push origin main

# 或者回滚到指定版本
git revert <commit-hash>
git push origin main
```

### 紧急回滚
1. Cloudflare Dashboard → Pages → Deployments
2. 选择之前的成功部署版本
3. 点击 "Rollback to this deployment"
4. 几分钟内全球生效

## 域名和SSL

### 自动HTTPS
- Cloudflare自动提供SSL证书
- 支持HTTP/2和Brotli压缩
- 自动HTTP到HTTPS重定向

### 域名解析
```
# DNS记录配置
Type: CNAME
Name: daming (或www.daming)  
Target: daming-portal.pages.dev
Proxy: ✅ Proxied (启用Cloudflare代理)
```

## 成本估算

### Cloudflare Pages免费额度
- **构建数量**: 500次/月
- **带宽**: 无限制
- **部署数量**: 无限制
- **自定义域名**: 支持

### 升级选项
- **Pages Pro**: $20/月（更多构建、高级功能）
- **Workers**: 按需付费（API功能扩展）
- **D1数据库**: 免费额度100K读取/月

## 故障排除

### 常见问题

**构建失败**:
```bash
# 检查Node.js版本
node --version

# 清理缓存重新安装
rm -rf node_modules yarn.lock
yarn install

# 本地验证构建
yarn build
```

**部署超时**:
- 检查依赖包大小
- 优化构建命令
- 减少不必要的依赖

**页面404**:
- 检查路由配置
- 确认静态导出设置
- 验证_redirects文件

### 支持渠道
- Cloudflare社区论坛
- GitHub Issues
- Cloudflare官方文档

---

**这套CI/CD流程实现了从代码提交到全球部署的全自动化，让你专注于代码开发，剩下的交给自动化处理！** 🚀