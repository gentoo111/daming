import { MingCard } from '@/components/ui'

const newsItems = [
  {
    id: 1,
    category: '朝廷动态',
    title: '新用户破万，帝国日益繁荣',
    summary: '大明帝国用户数量突破一万人，来自五湖四海的才子佳人齐聚一堂...',
    time: '3时辰前',
    icon: '🏛️'
  },
  {
    id: 2, 
    category: '科举公告',
    title: 'IT史学殿试即将开考',
    summary: '本月科举考试将围绕信息技术发展历程展开，考生可提前复习相关内容...',
    time: '半日前', 
    icon: '📜'
  },
  {
    id: 3,
    category: '帝国概览',
    title: '用户活跃度再创新高',
    summary: '本月用户日均在线时长达2.5时辰，社区互动频次较上月提升40%...',
    time: '1日前',
    icon: '📊'
  }
]

export function CourtNews() {
  return (
    <section className="py-16 bg-ivory">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <MingCard 
              key={news.id}
              variant="paper"
              padding="lg"
              className="hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{news.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-imperial text-ivory px-2 py-1 text-xs font-medium rounded">
                      {news.category}
                    </span>
                    <span className="text-xs text-ink opacity-70">
                      {news.time}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-inkblack mb-2 line-clamp-2">
                    {news.title}
                  </h3>
                  
                  <p className="text-sm text-ink opacity-80 line-clamp-3 leading-relaxed">
                    {news.summary}
                  </p>
                  
                  <div className="mt-4 text-right">
                    <span className="text-imperial text-sm hover:underline cursor-pointer">
                      阅读全文 →
                    </span>
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