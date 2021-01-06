// Dependencies
import React from 'react';
// Styles
import styles from '@/styles/error.module.scss';

const Error = ({ text, type }: {
  text: string,
  type: string,
}): JSX.Element => (
  <div className={`${styles.error} ${styles[type]}`} >
    <p>{text}</p>
  </div>
);

export default Error;