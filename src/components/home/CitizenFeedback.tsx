import { MingCard, MingButton, MingInput } from '@/components/ui'

const recentFeedback = [
  {
    id: 1,
    author: '文曲星君',
    content: '希望能增加更多诗词创作功能，让文人雅士有更多展示才华的机会！',
    time: '2时辰前',
    likes: 23
  },
  {
    id: 2,
    author: '武曲星君', 
    content: '兵部的竞技系统很有趣，建议增加团队对战模式。',
    time: '4时辰前',
    likes: 18
  },
  {
    id: 3,
    author: '商贾达人',
    content: '期待户部的虚拟股市早日上线，想体验古代版投资理财！',
    time: '6时辰前',
    likes: 31
  }
]

export function CitizenFeedback() {
  return (
    <section className="py-16 bg-cloud bg-opacity-30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-imperial mb-4">
            臣民奏章
          </h2>
          <p className="text-inkblack opacity-80 max-w-2xl mx-auto">
            广开言路，集思广益。您的每一条建议都是帝国发展的宝贵财富。
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <MingCard variant="scroll" padding="lg" className="mb-8">
            <h3 className="text-xl font-bold text-imperial mb-4">呈递奏章</h3>
            <div className="space-y-4">
              <MingInput 
                placeholder="请输入您的建议或意见..."
                variant="filled"
                size="lg"
              />
              <div className="text-right">
                <MingButton variant="primary">
                  呈递奏章
                </MingButton>
              </div>
            </div>
          </MingCard>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-inkblack mb-4">近期奏章</h3>
            {recentFeedback.map((feedback) => (
              <MingCard 
                key={feedback.id}
                variant="paper"
                padding="md"
                className="hover:ming-shadow-deep transition-shadow duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-imperial text-ivory rounded-full flex items-center justify-center font-bold">
                      {feedback.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-inkblack">{feedback.author}</h4>
                      <span className="text-sm text-ink opacity-70">{feedback.time}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-ink">
                    <span>👍</span>
                    <span>{feedback.likes}</span>
                  </div>
                </div>
                
                <p className="text-inkblack leading-relaxed">
                  {feedback.content}
                </p>
              </MingCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}