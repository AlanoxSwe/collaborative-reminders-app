import { useState, useRef } from 'react';
import { useRouter } from "next/router";

import TodoContainer from '@/containers/TodoContainer';
import Items from '@/components/Items';
import Header from '@/components/common/Header';

import db from '@/util/db';

import styles from '@/styles/list.module.scss';
import Button from '@/components/common/Button';

export default function Todo () {
  const [connectionExists, setConnectionExists] = useState(true);
  const textInput = useRef();
  const descInput = useRef();

  const router = useRouter();
  const { todoId } = router.query;

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>{todoId}</h1>
        <form className={styles.form}>
          <TodoContainer 
            type='text'
            room={`${todoId}`}
            connectionExists={connectionExists}
            ref={textInput}
            className={styles.textField}
          />
          <TodoContainer 
            type='textarea'
            room={`${todoId}-desc`}
            connectionExists={connectionExists}
            ref={descInput}
            className={styles.textField}
          />
          <Button type="secondary" text="Add" className={styles.button} onClick={() => db.addBaseItem(todoId, textInput, descInput)} />
        </form>

        <Items todoId={todoId} />
      </div>
    </>
  );
}