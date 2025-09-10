# 大明朝官网 - 代码开发规则

## 核心理念

**以20年全栈开发经验的标准要求自己，写出简洁、优雅、可维护的专业级代码**

## 包管理规范

### Yarn 作为唯一包管理器
- **统一工具** - 项目统一使用Yarn进行包管理，禁止混用npm
- **性能优势** - Yarn提供更快的安装速度和更好的依赖解析
- **Lockfile管理** - 使用yarn.lock确保依赖版本一致性
- **工作空间支持** - 后续多项目时可使用Yarn Workspaces

### 常用Yarn命令规范
```bash
# 安装依赖
yarn install

# 添加依赖
yarn add package-name
yarn add -D package-name  # 开发依赖

# 移除依赖
yarn remove package-name

# 启动开发服务器
yarn dev

# 构建项目
yarn build

# 启动生产服务器
yarn start

# 代码检查
yarn lint
```

### 版本管理
- **Yarn版本** - 使用Yarn 1.x稳定版本
- **Node版本** - 项目要求Node.js 18+
- **依赖更新** - 定期使用`yarn outdated`检查过期依赖
- **安全审计** - 定期运行`yarn audit`检查安全漏洞

## 代码质量标准

### 1. 零注释原则
- **代码即文档** - 变量名、函数名、类名要自解释
- **业务逻辑清晰** - 代码结构体现业务流程
- **避免冗余注释** - 好代码不需要解释"做什么"
- **例外情况** - 复杂算法或特殊业务规则可添加必要说明

```typescript
// ❌ 不好的写法
const u = getUserById(id); // 获取用户信息
if (u.status === 1) { // 检查用户状态
  // 用户激活逻辑
}

// ✅ 好的写法  
const activeUser = getUserById(id);
if (activeUser.isActivated) {
  activateUserFeatures(activeUser);
}
```

### 2. KISS原则 (Keep It Simple, Stupid)
- **简单胜过复杂** - 优先选择简单直接的解决方案
- **避免过度工程** - 不要为了未来可能的需求增加复杂度
- **一个函数一个职责** - 函数功能单一，易于理解和测试
- **减少嵌套层级** - 使用早期返回减少嵌套

```typescript
// ❌ 复杂的嵌套
function processUser(user: User) {
  if (user) {
    if (user.isActive) {
      if (user.hasPermission) {
        return doSomething(user);
      }
    }
  }
  return null;
}

// ✅ 简单的早期返回
function processUser(user: User) {
  if (!user || !user.isActive || !user.hasPermission) {
    return null;
  }
  return doSomething(user);
}
```

### 3. MVC分层架构原则
- **Model**: 数据模型和业务逻辑 (`lib/models/`, `lib/services/`)
- **View**: UI界面和用户交互 (`components/`, `app/`)  
- **Controller**: 路由和请求处理 (`app/api/`, `lib/controllers/`)
- **严格分离** - 避免跨层直接调用

```
项目结构示例:
src/
├── app/                    # Next.js App Router (Controller + View)
│   ├── api/               # API Routes (Controller)
│   └── (pages)/           # Page Components (View)
├── components/            # Reusable UI Components (View)
├── lib/                   # Business Logic Layer
│   ├── models/           # Data Models (Model)
│   ├── services/         # Business Services (Model)
│   ├── utils/            # Pure Utility Functions
│   └── types/            # TypeScript Type Definitions
```

## 组件化开发规范

### 1. 组件设计原则
- **原子化设计** - Button → Card → Page的层级结构
- **单一职责** - 每个组件只负责一个功能
- **可复用性** - 通过props实现不同场景的复用
- **可组合性** - 小组件组合成大组件

### 2. 组件命名规范
- **文件名**: PascalCase (`MingButton.tsx`)
- **组件名**: 与文件名一致
- **Props接口**: 组件名 + Props (`MingButtonProps`)
- **样式类**: kebab-case (`ming-button`)

### 3. 组件文件结构
```typescript
interface MingButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

export function MingButton({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick 
}: MingButtonProps) {
  return (
    <button 
      className={`ming-button ${variant} ${size}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

## 开发流程规范

### 1. 开发前检查清单
- [ ] 📖 阅读相关设计文档
- [ ] 🔍 检查现有代码是否有类似功能
- [ ] 🗂️ 确认文件放置位置是否合理
- [ ] 🧩 设计组件接口和数据流

### 2. 代码审查要点
- **功能重复性** - 是否可以复用现有代码
- **命名一致性** - 变量、函数、文件命名是否规范
- **类型安全** - TypeScript类型定义是否完整
- **性能影响** - 是否有明显的性能问题

### 3. 重构优化原则
- **小步快跑** - 频繁的小重构胜过大的重写
- **测试保障** - 重构前确保有测试覆盖
- **向后兼容** - 避免破坏现有功能
- **文档同步** - 重构后及时更新文档

## TypeScript使用规范

### 1. 类型定义
- **接口优先** - 优先使用interface而不是type
- **严格模式** - 启用strict模式，避免any类型
- **泛型合理使用** - 复杂类型使用泛型提升复用性
- **类型导出** - 在`lib/types/`统一管理和导出

### 2. 类型命名规范
```typescript
// 接口命名
interface UserProfile { }
interface ApiResponse<T> { }

// 类型别名
type UserId = string;
type UserStatus = 'active' | 'inactive' | 'pending';

// 枚举命名
enum OfficialRank {
  CITIZEN = 1,
  SCHOLAR = 2,
  MINISTER = 3
}
```

## 性能优化规范

### 1. Next.js优化
- **动态导入** - 使用`dynamic()`懒加载组件
- **图片优化** - 使用Next.js Image组件
- **字体优化** - 使用Next.js Font优化
- **Bundle分析** - 定期检查bundle大小

### 2. React优化
- **memo使用** - 适当使用React.memo防止不必要渲染
- **useMemo/useCallback** - 缓存计算结果和函数
- **状态设计** - 合理的状态结构，避免过深嵌套
- **事件处理** - 避免在render中创建新函数

### 3. 数据库优化
- **查询优化** - 使用索引，避免N+1查询
- **分页查询** - 大数据量使用分页
- **缓存策略** - 合理使用缓存机制
- **连接池** - 数据库连接池管理

## 样式和UI规范

### 1. TailwindCSS使用
- **原子化类名** - 优先使用Tailwind原生类名
- **自定义主题** - 在tailwind.config.ts中定义古风主题
- **响应式设计** - 使用Tailwind响应式前缀
- **暗黑模式** - 考虑dark:前缀支持

### 2. 古风设计系统
- **颜色规范** - 故宫红(#8B0000)、金黄(#FFD700)、墨绿(#2F4F2F)
- **字体系统** - 思源宋体、方正字体
- **间距系统** - 8px基础间距体系
- **圆角规范** - 古典直角为主，适度圆角装饰

## 错误处理规范

### 1. 错误边界
- **组件错误边界** - 使用Error Boundary捕获组件错误
- **API错误处理** - 统一的错误响应格式
- **用户友好提示** - 错误信息要符合古风语言风格
- **日志记录** - 重要错误要有日志记录

### 2. 表单验证
- **前后端验证** - 前端验证用户体验，后端验证数据安全
- **实时反馈** - 表单字段实时验证反馈
- **错误信息** - 清晰的错误提示信息
- **无障碍支持** - 支持屏幕阅读器等无障碍功能

## 安全开发规范

### 1. 数据安全
- **输入验证** - 所有用户输入都要验证
- **SQL注入防护** - 使用参数化查询
- **XSS防护** - 适当的内容转义
- **CSRF防护** - 使用CSRF token

### 2. 认证授权
- **密码加密** - 使用bcrypt等安全哈希
- **JWT安全** - 合适的过期时间和签名
- **权限检查** - API和页面都要有权限验证
- **敏感数据** - 避免在前端暴露敏感信息

## 测试规范

### 1. 测试策略
- **单元测试** - 核心业务逻辑要有单元测试
- **集成测试** - API端点的集成测试
- **E2E测试** - 关键用户流程的端到端测试
- **测试覆盖率** - 重要模块测试覆盖率>80%

### 2. 测试工具
- **Jest** - 单元测试和集成测试
- **React Testing Library** - React组件测试
- **Playwright** - E2E测试
- **MSW** - API Mock测试

## 部署和运维规范

### 1. 环境管理
- **环境变量** - 使用.env管理不同环境配置
- **配置分离** - 开发、测试、生产环境配置分离
- **密钥管理** - 敏感信息使用环境变量
- **版本控制** - .env.example提交，.env不提交

### 2. 部署流程
- **自动化部署** - 使用CI/CD自动化部署
- **版本标签** - 每次发布都要打版本标签
- **回滚准备** - 确保能快速回滚到上一版本
- **监控告警** - 部署后的监控和告警机制

## 文档管理规范

### 1. docs目录结构
```
docs/
├── README.md              # 项目总览
├── coding-rules.md        # 本文档
├── tech-stack.md          # 技术栈设计  
├── product-concept.md     # 产品概念
├── ui-design.md           # 界面设计
├── development-plan.md    # 开发计划
├── api-docs.md           # API文档 (待创建)
└── deployment.md         # 部署文档 (待创建)
```

### 2. 文档维护原则
- **及时更新** - 代码变更时同步更新文档
- **避免重复** - 检查是否已有类似文档
- **内容专一** - 每个文档专注一个主题
- **版本控制** - 重要变更要记录版本历史

## 代码审查清单

### 提交前自检
- [ ] 代码是否遵循零注释原则？
- [ ] 是否检查了现有代码避免重复？
- [ ] 组件是否可复用？
- [ ] TypeScript类型是否完整？
- [ ] 是否遵循MVC分层？
- [ ] 性能是否有明显问题？
- [ ] 错误处理是否完善？
- [ ] 相关文档是否需要更新？

### 代码规范检查
- [ ] 命名是否清晰自解释？
- [ ] 函数是否单一职责？
- [ ] 嵌套层级是否过深？
- [ ] 是否有硬编码的魔法数字？
- [ ] 样式是否符合设计系统？
- [ ] 是否考虑了移动端适配？

## 规则更新流程

### 1. 更新触发条件
- 发现现有规则的不足
- 引入新技术或工具
- 项目复杂度增加需要新规范
- 团队成员反馈建议

### 2. 更新流程
1. **提出议题** - 在开发过程中发现问题
2. **讨论方案** - 分析问题并提出解决方案  
3. **更新文档** - 修改本文档内容
4. **团队同步** - 确保所有开发者了解新规则
5. **实践验证** - 在实际开发中验证新规则效果

### 3. 版本管理
- **版本号** - 使用语义化版本号(如v1.2.3)
- **变更日志** - 记录每次更新的内容和原因
- **向后兼容** - 规则变更要考虑已有代码的兼容性

## 变更历史

### v1.1.0 (2024-09-10)
- 新增包管理规范
- 统一使用Yarn作为包管理器
- 添加Yarn命令使用规范
- 明确版本管理要求

### v1.0.0 (2024-09-10)
- 初始版本创建
- 建立基础代码开发规范
- 定义组件化开发标准
- 确立文档管理规范

---

**这份规则文档将随着项目发展持续完善，确保代码质量始终保持在专业水准！**