import styles from '@/styles/textField.module.scss';

const TextField = React.forwardRef(({ type, size, extraClass, text, ...props }, ref) => {

  return ( 
    <input type={type} placeholder={text} ref={ref} className={`${styles.textField} ${size && styles[size]} ${extraClass}`} {...props} />
  )
});

export default TextField;