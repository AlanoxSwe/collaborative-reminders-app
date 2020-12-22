import styles from '@/styles/textField.module.scss';

const TextareaField = React.forwardRef(({ size, extraClass, text, ...props }, ref) => {

  return ( 
    <textarea placeholder={text} ref={ref} className={`${styles.textField} ${size && styles[size]} ${extraClass}`} {...props} />
  )
});

export default TextareaField;