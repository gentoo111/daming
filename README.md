# 大明帝国官网 🏛️

> 承载千年文明，融汇现代科技

一个以明朝六部制为架构的创新性文化体验平台，将传统中华文明与现代互联网技术完美融合。

## ✨ 项目特色

- 🎨 **古风设计系统** - 故宫红+金黄+墨绿的经典配色方案
- 🏛️ **六部衙门架构** - 吏部、户部、礼部、兵部、刑部、工部功能分区
- 📱 **现代技术栈** - Next.js 15 + TailwindCSS 4.0 + TypeScript
- 🚀 **全球部署** - Cloudflare Pages边缘计算，毫秒级响应
- 🔧 **完整CI/CD** - 代码提交自动部署，开发效率MAX

## 🎯 产品愿景

**"现代政府官网的古代版本"** - 用传统官衙形式承载现代互联网功能：

- 📜 **护照申请** - 用户注册的古风包装
- 👥 **朝堂议事** - 社区讨论的雅致呈现  
- 📋 **科举考试** - 知识竞赛的文化载体
- 💰 **商贸投资** - 虚拟股市的古代版本
- 🕯️ **赛博烧纸** - 数字祭祀的创新功能

## 🛠️ 技术栈

### 核心框架
- **Next.js 15** - React全栈框架，App Router
- **TypeScript** - 类型安全的JavaScript超集
- **TailwindCSS 4.0** - 原子化CSS框架

### 数据层（规划中）
- **Cloudflare D1** - SQLite分布式数据库
- **Drizzle ORM** - 轻量级对象关系映射

### 部署架构
- **Cloudflare Pages** - 静态资源托管
- **Cloudflare Workers** - 边缘计算API
- **GitHub Actions** - 持续集成/部署

## 🚀 快速开始

### 环境要求
- Node.js 18+
- Yarn 1.22.x

### 本地开发
```bash
# 克隆项目
git clone https://github.com/your-username/daming-portal.git
cd daming-portal

# 安装依赖
yarn install

# 启动开发服务器
yarn dev

# 打开浏览器访问 http://localhost:3000
```

### 可用命令
```bash
yarn dev        # 启动开发服务器
yarn build      # 生产环境构建
yarn start      # 启动生产服务器
yarn lint       # 代码规范检查
```

## 📁 项目结构

```
daming/
├── docs/                   # 📚 项目文档
│   ├── README.md          # 项目总览
│   ├── coding-rules.md    # 代码开发规范
│   ├── tech-stack.md      # 技术栈设计
│   ├── ui-design.md       # 界面设计文档
│   └── deployment.md      # 部署文档
├── src/
│   ├── app/               # Next.js App Router
│   ├── components/        # React组件
│   │   ├── ui/           # 基础UI组件
│   │   ├── layout/       # 布局组件
│   │   └── home/         # 首页组件
│   └── lib/              # 工具库和类型
├── public/                # 静态资源
└── .github/              # GitHub配置
```

## 🎨 设计系统

### 色彩方案
- 🔴 **故宫红** (#8B0000) - 主色调，权威庄重
- 🟡 **金黄色** (#FFD700) - 辅助色，华丽典雅  
- 🟢 **墨绿色** (#2F4F2F) - 点缀色，古典雅致
- ⚪ **象牙白** (#FFFFF0) - 背景色，温润如玉

### 组件库
- `MingButton` - 古风按钮组件
- `MingCard` - 卡片容器组件
- `MingInput` - 输入框组件

## 🏗️ 开发规范

项目遵循严格的代码开发规范：

- ✅ **零注释原则** - 代码即文档，变量名自解释
- ✅ **KISS原则** - 简单胜过复杂
- ✅ **MVC分层** - 清晰的架构分离
- ✅ **组件化优先** - 可复用的原子化设计
- ✅ **Yarn统一** - 唯一指定包管理器

详见 [coding-rules.md](./docs/coding-rules.md)

## 🚀 部署

### 自动部署
项目配置了完整的CI/CD流程：

1. **Push代码** → GitHub触发构建
2. **自动测试** → 代码质量检查
3. **构建项目** → Next.js静态导出
4. **全球部署** → Cloudflare边缘分发

### 环境地址
- **开发环境**: http://localhost:3000
- **生产环境**: https://daming-portal.pages.dev
- **预览环境**: https://branch-name.daming-portal.pages.dev

详见 [deployment.md](./docs/deployment.md)

## 🎯 发展路线图

### 第一阶段 ✅ - 静态界面（已完成）
- [x] 古风UI组件系统
- [x] 六部衙门导航架构
- [x] 响应式布局适配
- [x] CI/CD部署流程

### 第二阶段 🚧 - 用户系统（开发中）
- [ ] 用户注册/登录
- [ ] 大明护照申请
- [ ] 个人府邸空间
- [ ] 基础社交功能

### 第三阶段 📋 - 内容体验（规划中）
- [ ] IT历史体验馆
- [ ] 虚拟股市系统
- [ ] 科举考试功能
- [ ] 社区互动平台

### 第四阶段 🎮 - 高级功能（远期）
- [ ] 移动端App开发
- [ ] AI智能助手
- [ ] VR/AR体验集成
- [ ] 国际化多语言

## 🤝 贡献指南

欢迎对中华文化和历史体验感兴趣的开发者加入！

1. Fork本项目
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送分支 (`git push origin feature/amazing-feature`)
5. 开启Pull Request

## 📄 开源协议

本项目采用 MIT 协议，详见 [LICENSE](./LICENSE) 文件。

## 🙏 致谢

- [Next.js](https://nextjs.org/) - 优秀的React全栈框架
- [TailwindCSS](https://tailwindcss.com/) - 现代化CSS框架
- [Cloudflare](https://cloudflare.com/) - 全球边缘计算平台

---

**让中华文明在数字时代焕发新的生机！** ✨

🤖 **Generated with [Claude Code](https://claude.ai/code)**

Co-Authored-By: Claude <noreply@anthropic.com>
