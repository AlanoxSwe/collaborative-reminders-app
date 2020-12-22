// Dependencies
import React from 'react';
// Styles
import styles from '@/styles/textField.module.scss';

const TextareaField = React.forwardRef(({ size, extraClass, text, ...props }: {
  size?: string,
  extraClass?: string,
  text: string,
}, ref: React.Ref<HTMLTextAreaElement>) => {
  return ( 
    <textarea placeholder={text} ref={ref} className={`${styles.textField} ${size && styles[size]} ${extraClass}`} {...props} />
  )
});

TextareaField.displayName = 'TextareaField';
export default TextareaField;