import useSWR from 'swr';
import lscache from 'lscache';

import Link from 'next/link';
import Button from '@/components/common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import styles from '@/styles/index.module.scss';

export default function LatestTodo () {
  const latestTodo = lscache.get('savedTodo');
  const { data } = useSWR(latestTodo && `/api/todo/${latestTodo}`, { refreshInterval: 0 });


  return (
    <div className={`${styles.container} ${styles.afterWave}`}>
      <h1 className={styles.title}>Your latest todo list</h1>
      {
        data ?
        <Link href={`/list/${latestTodo}`} passHref>
          <Button type="primary" className={styles.latestButton}>
            <div>{data?.name}</div>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </Button>
        </Link>
        :
        <p>Nothing here... Create one?</p>
      }
    </div>
  );
}