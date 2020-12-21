import { useRef } from 'react';

import db from '@/util/db';

import TodoContainer from '@/containers/TodoContainer';
import Button from '@/components/common/Button';

import styles from '@/styles/form.module.scss';

export default function Form ({ connectionId, connectionExists, base, className }) {
  const textInput = useRef();
  const descInput = useRef();

  return (
    <form className={`${styles.form} ${className}`}>
      <TodoContainer 
        type='text'
        room={`${connectionId}`}
        connectionExists={connectionExists}
        ref={textInput}
        className={styles.textField}
      />
      <TodoContainer 
        type='textarea'
        room={`${connectionId}-desc`}
        connectionExists={connectionExists}
        ref={descInput}
        className={styles.textField}
      />
      {
        base ? <Button type="secondary" className={styles.button} onClick={() => db.addBaseItem(connectionId, textInput, descInput)}>Add</Button>
        : <Button type="secondary" className={styles.button} onClick={() => db.addItem(connectionId, textInput, descInput)}>Add</Button>
      }
    </form>
  );

}