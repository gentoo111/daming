export interface MingComponentProps {
  className?: string
  children?: React.ReactNode
}

export type MingSize = 'sm' | 'md' | 'lg'
export type MingVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type MingColor = 'imperial' | 'golden' | 'ink' | 'scroll'

export interface MingButtonProps extends MingComponentProps {
  variant?: MingVariant
  size?: MingSize  
  color?: MingColor
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export interface MingCardProps extends MingComponentProps {
  variant?: 'paper' | 'scroll' | 'seal'
  padding?: MingSize
  shadow?: boolean
}

export interface MingInputProps extends MingComponentProps {
  variant?: 'outline' | 'filled'
  size?: MingSize
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
  error?: string
}