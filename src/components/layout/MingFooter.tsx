import { MingCard } from '@/components/ui'

export function MingFooter() {
  return (
    <footer className="w-full bg-inkblack text-ivory py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-golden mb-4">大明帝国</h3>
            <p className="text-ivory opacity-80 leading-relaxed">
              承载中华文明五千年智慧，融合现代科技创新体验。
              在这里，您将体验到前所未有的历史文化沉浸之旅。
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-golden mb-4">快速导航</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-ivory opacity-80 hover:opacity-100 hover:text-golden transition-colors">关于帝国</a></li>
              <li><a href="#" className="text-ivory opacity-80 hover:opacity-100 hover:text-golden transition-colors">使用帮助</a></li>
              <li><a href="#" className="text-ivory opacity-80 hover:opacity-100 hover:text-golden transition-colors">联系我们</a></li>
              <li><a href="#" className="text-ivory opacity-80 hover:opacity-100 hover:text-golden transition-colors">意见反馈</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-golden mb-4">帝国法规</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-ivory opacity-80 hover:opacity-100 hover:text-golden transition-colors">用户协议</a></li>
              <li><a href="#" className="text-ivory opacity-80 hover:opacity-100 hover:text-golden transition-colors">隐私政策</a></li>
              <li><a href="#" className="text-ivory opacity-80 hover:opacity-100 hover:text-golden transition-colors">服务条款</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-golden border-opacity-30 mt-8 pt-8 text-center">
          <p className="text-ivory opacity-60">
            © 2024 大明帝国 · 版权所有 · 京ICP备xxxxxxxx号
          </p>
        </div>
      </div>
    </footer>
  )
}