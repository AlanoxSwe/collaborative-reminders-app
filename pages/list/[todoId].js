import useSWR from 'swr';
import { useState } from 'react';
import { useRouter } from "next/router";

import Items from '@/components/item/Items';
import Header from '@/components/common/Header';
import Form from '@/containers/Form';

import styles from '@/styles/list.module.scss';
import uuid from '@/util/uuid';
import Wave from '@/components/common/Wave';
import Freeze from '@/components/item/Freeze';


export default function Todo () {
  const [connectionExists, setConnectionExists] = useState(true);
  const router = useRouter();
  const { todoId } = router.query;
  const { data } = useSWR(todoId && `/api/todo/${todoId}`);

  console.log(data?.active);
  return (
    <>
      <Header />
      <div className={styles.waveContainer}>
        <section className={`${styles.container} ${!data?.active && styles.disabled}`}>
          <h1 className={styles.title}>{data?.name}</h1>
          {todoId && <Form connectionId={todoId} connectionExists={connectionExists} base={true} />} 

          <Items todoId={todoId} />
          <div className={styles.share}>
            <h2 className={styles.shareTitle}>Collaborate in real-time!</h2>
            <p>Share your list using this link:</p>
            <code className={styles.shareLink}>{`${process.browser && window.location.host}/${todoId && uuid.shortify(todoId)}`}</code>
          </div>
        </section>
        <Wave color="#09f" />
        <section className={`${styles.container} ${styles.afterWave}`}>
          {data?.password && <Freeze styles={styles} data={data} />}
        </section>
      </div>
    </>
  );
}