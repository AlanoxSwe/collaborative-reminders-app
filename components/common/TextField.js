import styles from '@/styles/textField.module.scss';

const TextField = React.forwardRef(({ type, size, className, text, ...props }, ref) => {

  return ( 
    <input type={type} placeholder={text} ref={ref} className={`${styles.textField} ${size && styles[size]} ${className}`} {...props} />
  )
});

export default TextField;