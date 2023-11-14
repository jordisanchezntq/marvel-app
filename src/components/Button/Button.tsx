import React, { CSSProperties, MouseEvent, ReactNode } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  children?: ReactNode | undefined
  onClick?: (e: MouseEvent) => void
  isDisabled?: boolean
  variant?: 'primary' | 'secondary' | 'ghost'
  color?: 'red' | 'white'
  size?: 'xs' | 'sm' | 'md'
  isBlock?: boolean
  isLoading?: boolean
  isHidden?: boolean
  iconPosition?: 'left' | 'right'
  style?: CSSProperties
  classButton?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  classButton,
  onClick,
  iconPosition,
  isBlock,
  isDisabled,
  variant = 'primary',
  size = 'md',
  style,
  color = 'danger',
  isLoading
}) => {
  const handleClick = (e:MouseEvent): void => {
    onClick?.(e)
  }

  const content = isLoading ? 'Loading...' : children

  const className = `
    ${styles.button ? styles.button : ''} 
    ${styles['button--' + variant]}
    ${styles['button--' + size]} 
    ${styles['button--' + color]} 
    ${iconPosition ? styles['button--icon-'+iconPosition] : ''} 
    ${isBlock ? styles['button--block'] : ''} 
    ${React.Children.count(children) === 0 ? styles['button--only-icon'] : ''}
    ${typeof classButton === 'string' ? classButton : ''}
  `
  return (
    <button
    className={className}
    onClick={handleClick}
    disabled={isDisabled as boolean || isLoading}
    style={style}
    >
      {content ? <span>{content}</span> : null}
    </button>
  )
}

export default Button