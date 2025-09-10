'use client'

import { cn } from '@/lib/utils'
import { MingButtonProps } from '@/lib/types'

const buttonVariants = {
  primary: 'bg-imperial text-ivory border-2 border-imperial hover:bg-opacity-90',
  secondary: 'bg-golden text-inkblack border-2 border-golden hover:bg-opacity-90', 
  outline: 'bg-transparent text-imperial border-2 border-imperial hover:bg-imperial hover:text-ivory',
  ghost: 'bg-transparent text-inkblack hover:bg-cloud'
}

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
}

export function MingButton({
  variant = 'primary',
  size = 'md',
  className,
  children,
  disabled = false,
  onClick,
  type = 'button'
}: MingButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-imperial focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'ming-shadow',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
    >
      {children}
    </button>
  )
}