// Dependencies
import React, { useState, useEffect, EffectCallback } from 'react';
import useSWR from 'swr';
import lscache from 'lscache';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
// Components
import Button from '@/components/common/Button';
// Styles
import styles from '@/styles/index.module.scss';

import localstorage from '@/util/localstorage';

const LatestTodo = (): JSX.Element => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getLists = async () => {
      const cache = await localstorage.getLists();
      setTodos(cache);
    }
    getLists();
  }, []);

  return (
    <div className={`${styles.container} ${styles.afterWave}`}>
      <h2 className={styles.subTitle}>Your latest todo lists</h2>
      {
        todos ?
          todos.map(list => 
            list &&
            <Link href={`/list/${list.id}`} key={list.id} passHref>
              <Button type="primary" className={styles.latestButton}>
                <div>{list.name}</div>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </Button>
            </Link>
          )
        :
          <p>Nothing here... Create one?</p>
      }
    </div>
  );
}

export default LatestTodo;
