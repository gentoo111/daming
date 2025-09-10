# 大明朝官网 - 技术栈设计文档

## 项目概述

**项目名称**: 大明朝官网 (DaMing Portal)
**项目描述**: 多元宇宙人生体验平台，以大明朝为起点的沉浸式历史体验系统
**部署平台**: Cloudflare 生态

## 核心技术栈

### 前端框架
- **Next.js 14** (App Router)
  - 全栈React框架，支持SSR/SSG
  - 内置API Routes提供后端能力
  - 优秀的SEO支持和性能优化
- **React 18** + **TypeScript**
  - 现代React Hooks和并发特性
  - 完整类型安全保证
- **TailwindCSS**
  - 原子化CSS框架
  - 快速构建古风UI界面

### 数据层
- **Cloudflare D1**
  - 基于SQLite的分布式数据库
  - 边缘计算，全球低延迟
  - 免费额度：1M读取/月，100K写入/月
- **Drizzle ORM**
  - 轻量级ORM，完美支持D1
  - 类型安全的SQL查询构建器
  - 优秀的边缘运行时性能

### 认证系统
- **NextAuth.js**
  - 支持多种登录方式
  - JWT和Session管理
  - 与Next.js深度集成

### 文件存储
- **Cloudflare R2**
  - S3兼容的对象存储
  - 用于头像、图片等静态资源
  - 与CDN无缝集成

### 部署架构
- **Cloudflare Pages**: 静态资源和前端托管
- **Cloudflare Workers**: API Routes自动转换
- **边缘计算**: 全球分布式部署

## 开发工具链

### 代码质量
- **ESLint** + **Prettier**: 代码规范和格式化
- **Husky** + **lint-staged**: Git提交钩子
- **TypeScript**: 全栈类型安全

### UI组件库
- **Headless UI**: 无样式可访问组件
- **Lucide React**: 现代图标库
- **中文古风字体包**: 营造古代氛围

### 实用工具
- **React Hook Form** + **Zod**: 表单处理和验证
- **date-fns**: 日期处理（支持农历转换）
- **Sharp**: 图片处理和优化
- **Zustand**: 轻量级状态管理（按需使用）

## 架构优势

### 性能优化
- 边缘计算部署，全球低延迟
- 静态生成 + 服务端渲染
- 自动代码分割和懒加载
- 图片自动优化

### 开发体验
- TypeScript全栈类型安全
- 热重载和快速开发
- 现代工具链集成
- 统一的代码规范

### 成本控制
- Cloudflare免费层支持初期发展
- 按需付费模式
- 无需维护独立服务器
- 自动扩缩容

## 项目结构

```
daming/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/            # API Routes
│   │   ├── (auth)/         # 认证相关页面
│   │   ├── passport/       # 护照申请
│   │   └── dashboard/      # 用户空间
│   ├── components/         # React组件
│   ├── lib/               # 工具库和配置
│   └── styles/            # 全局样式
├── docs/                  # 项目文档
├── public/                # 静态资源
└── drizzle/              # 数据库迁移
```

## 开发阶段规划

### 阶段一：基础架构 (2-3周)
- Next.js项目搭建
- 数据库设计和ORM配置
- 用户认证系统
- 基础UI组件库

### 阶段二：核心功能 (3-4周)
- 护照申请系统
- 用户档案管理
- 基础社交功能
- 等级和成就系统

### 阶段三：内容填充 (持续)
- 各种体验世界
- 古风UI优化
- 性能优化
- 用户反馈迭代

## 扩展规划

- **移动端**: React Native重用业务逻辑
- **微服务化**: 按功能模块拆分独立服务
- **AI集成**: 智能NPC和个性化推荐
- **多语言**: 国际化支持