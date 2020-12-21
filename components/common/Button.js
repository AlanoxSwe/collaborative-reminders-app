import styles from '@/styles/button.module.scss';

const Button = ({ type, size, text, className, ...props }) => {

  return ( 
    <button className={`${styles.btn} ${styles[type]} ${size && styles[size]} ${className}`} {...props}>{text}</button>
  )
}

export default Button;