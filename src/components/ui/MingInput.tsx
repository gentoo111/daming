'use client'

import { cn } from '@/lib/utils'
import { MingInputProps } from '@/lib/types'

const inputVariants = {
  outline: 'bg-transparent border-2 border-cloud focus:border-imperial',
  filled: 'bg-scroll border-2 border-transparent focus:border-imperial'
}

const inputSizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg'
}

export function MingInput({
  variant = 'outline',
  size = 'md', 
  placeholder,
  value,
  onChange,
  disabled = false,
  error,
  className
}: MingInputProps) {
  return (
    <div className="space-y-1">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        className={cn(
          'w-full rounded-scroll transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-imperial focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'text-inkblack placeholder-gray-500',
          inputVariants[variant],
          inputSizes[size],
          error && 'border-red-500 focus:border-red-500',
          className
        )}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}