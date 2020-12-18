import styles from '@/styles/button.module.scss';

const Button = ({ type, text, ...props }) => {

  return ( 
    <button className={`${styles.btn} ${styles[type]}`} {...props}>{text}</button>
  )
}

export default Button;