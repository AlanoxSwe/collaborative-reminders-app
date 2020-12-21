import styles from '@/styles/button.module.scss';

const Button = ({ type, size, className, children, ...props }) => {

  return ( 
    <button className={`${styles.btn} ${styles[type]} ${size && styles[size]} ${className}`} {...props}>{children}</button>
  )
}

export default Button;