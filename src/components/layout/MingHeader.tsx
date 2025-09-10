import { MingButton } from '@/components/ui'

const departments = [
  { name: '吏部', href: '/departments/personnel', description: '人事管理' },
  { name: '户部', href: '/departments/finance', description: '财政民生' },
  { name: '礼部', href: '/departments/culture', description: '文化教育' },
  { name: '兵部', href: '/departments/military', description: '游戏竞技' },
  { name: '刑部', href: '/departments/justice', description: '规则管理' },
  { name: '工部', href: '/departments/construction', description: '技术建设' }
]

export function MingHeader() {
  return (
    <header className="w-full bg-imperial ming-pattern border-b-4 border-golden">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-golden mb-2">
            大明帝国
          </h1>
          <p className="text-ivory text-lg md:text-xl opacity-90">
            万国来朝 · 四海升平
          </p>
        </div>
        
        <nav className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {departments.map((dept) => (
            <a
              key={dept.name}
              href={dept.href}
              className="group"
            >
              <div className="bg-scroll hover:bg-golden transition-all duration-300 p-4 text-center ming-shadow hover:ming-shadow-deep border-2 border-golden hover:border-imperial">
                <h3 className="text-xl font-bold text-inkblack group-hover:text-imperial mb-1">
                  {dept.name}
                </h3>
                <p className="text-sm text-ink opacity-80 group-hover:opacity-100">
                  {dept.description}
                </p>
              </div>
            </a>
          ))}
        </nav>
        
        <div className="mt-6 text-center">
          <MingButton 
            variant="secondary" 
            size="lg"
            className="animate-pulse"
          >
            申请大明护照
          </MingButton>
        </div>
      </div>
    </header>
  )
}