// Dependencies
import React from 'react';
// Styles
import styles from '@/styles/textField.module.scss';

const TextField = React.forwardRef(({ type, size, extraClass, text, ...props }: {
  type: string,
  size?: string,
  extraClass?: string,
  text: string,
}, ref: React.Ref<HTMLInputElement>) => {
  return ( 
    <input type={type} placeholder={text} ref={ref} className={`${styles.textField} ${size && styles[size]} ${extraClass}`} {...props} />
  )
});

TextField.displayName = 'TextField';
export default TextField;