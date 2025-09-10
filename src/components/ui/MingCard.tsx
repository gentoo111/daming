import { cn } from '@/lib/utils'
import { MingCardProps } from '@/lib/types'

const cardVariants = {
  paper: 'bg-ivory border-2 border-cloud',
  scroll: 'bg-scroll border-2 border-golden ming-pattern',
  seal: 'bg-imperial text-ivory border-2 border-golden'
}

const cardPadding = {
  sm: 'p-3',
  md: 'p-4', 
  lg: 'p-6'
}

export function MingCard({
  variant = 'paper',
  padding = 'md',
  shadow = true,
  className,
  children
}: MingCardProps) {
  return (
    <div
      className={cn(
        'rounded-scroll',
        cardVariants[variant],
        cardPadding[padding],
        shadow && 'ming-shadow',
        className
      )}
    >
      {children}
    </div>
  )
}