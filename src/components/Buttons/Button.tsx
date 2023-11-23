import { Button as ButtonUI, ButtonProps as ButtonUIProps} from '@/components/ui/button'
import { ReactNode } from 'react'

export type ButtonProps = {
  label?: string;
  icon?: ReactNode;
  variant?: 'secondary' | 'default' | 'destructive' | 'outline' | 'ghost' | 'link' | null | undefined
} &  ButtonUIProps

export function Button({label, variant, ...rest}: ButtonProps) {
  return <ButtonUI variant={variant} {...rest}>{label}</ButtonUI>
}


export function IconButton({icon, ...rest}: ButtonProps) {
  return <ButtonUI variant='outline' size='icon' {...rest}>
    {icon}
  </ButtonUI>
}