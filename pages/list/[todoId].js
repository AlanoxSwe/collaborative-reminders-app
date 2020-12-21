import { useState } from 'react';
import { useRouter } from "next/router";

import Items from '@/components/Items';
import Header from '@/components/common/Header';
import Form from '@/containers/Form';

import styles from '@/styles/list.module.scss';

export default function Todo () {
  const [connectionExists, setConnectionExists] = useState(true);
  const router = useRouter();
  const { todoId } = router.query;

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>{todoId}</h1>
        <Form connectionId={todoId} connectionExists={connectionExists} base={true} />

        <Items todoId={todoId} />
      </div>
    </>
  );
}