import styles from '@/styles/button.module.scss';

const Button = React.forwardRef(({ type, size, className, children, ...props }, ref) => {

  return ( 
    <button ref={ref} className={`${styles.btn} ${styles[type]} ${size && styles[size]} ${className}`} {...props}>{children}</button>
  )
});

export default Button;