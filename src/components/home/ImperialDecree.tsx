import { MingCard } from '@/components/ui'

const decrees = [
  {
    id: 1,
    title: '开国大典',
    content: '恭迎各路英豪入驻大明帝国，共享盛世繁华！',
    date: '永乐元年十月初一',
    urgent: true
  },
  {
    id: 2, 
    title: '科举开考',
    content: '春闱在即，才子佳人可踊跃报名参加殿试。',
    date: '永乐元年九月十五',
    urgent: false
  },
  {
    id: 3,
    title: '商贸通告',
    content: '丝绸之路贸易系统即将上线，敬请期待！',
    date: '永乐元年九月初八',
    urgent: false
  }
]

export function ImperialDecree() {
  return (
    <section className="py-16 bg-scroll ming-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-imperial mb-4">
            皇帝诏书
          </h2>
          <div className="w-24 h-1 bg-golden mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {decrees.map((decree) => (
            <MingCard 
              key={decree.id}
              variant="paper"
              padding="lg"
              shadow={true}
              className="relative overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
              {decree.urgent && (
                <div className="absolute top-4 right-4 bg-imperial text-ivory px-3 py-1 text-sm font-medium">
                  紧急诏令
                </div>
              )}
              
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-imperial mb-2">
                    {decree.title}
                  </h3>
                  <p className="text-inkblack leading-relaxed mb-3">
                    {decree.content}
                  </p>
                  <p className="text-sm text-ink opacity-80">
                    颁布日期：{decree.date}
                  </p>
                </div>
                
                <div className="md:ml-6">
                  <div className="w-16 h-16 bg-imperial rounded-full flex items-center justify-center">
                    <span className="text-golden text-2xl font-bold">诏</span>
                  </div>
                </div>
              </div>
            </MingCard>
          ))}
        </div>
      </div>
    </section>
  )
}