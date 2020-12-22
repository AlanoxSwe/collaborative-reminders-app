import useSWR from 'swr';
import { useContext } from 'react';
import { useRouter } from "next/router";

import Link from 'next/link';
import Items from '@/components/item/Items';
import Header from '@/components/common/Header';
import Button from '@/components/common/Button';
import Form from '@/containers/Form';

import styles from '@/styles/list.module.scss';
import uuid from '@/util/uuid';
import Wave from '@/components/common/Wave';
import Freeze from '@/components/item/Freeze';

import ConnectionContext from '@/context/Connection';


export default function Todo () {
  const connectionExists = useContext(ConnectionContext);
  const router = useRouter();
  const { todoId } = router.query;
  const { data } = useSWR(todoId && `/api/todo/${todoId}`);

  return (
    <>
      <Header />
      { data ? 
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
      :
      <div className={styles.waveContainer}>
        <section className={styles.container}>
          <h1 className={styles.title}>This to-do list does not exist</h1>
          <Link href="/" passHref>
            <Button type="primary">
              Go back
            </Button>
          </Link>
        </section>
        <Wave color="#09f" />
      </div>
      }
    </>
  );
}