// Dependencies
import React from 'react';
// Styles
import styles from '@/styles/button.module.scss';

const Button = React.forwardRef(({ type, size, className, children, onClick, disabled, ...props }: {
  type: string,
  size?: string,
  className?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  disabled?: boolean,
  children: React.ReactNode,
}, ref: React.Ref<HTMLButtonElement>) => {
  return ( 
    <button ref={ref} className={`${styles.btn} ${styles[type]} ${size && styles[size]} ${className}`} onClick={onClick} disabled={disabled} {...props}>{children}</button>
  )
});

Button.displayName = 'Button';
export default Button;