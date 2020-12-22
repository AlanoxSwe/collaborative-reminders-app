// Dependencies
import React from 'react';
import useSWR from 'swr';
// Components
import ItemsList from '@/components/item/ItemsList';
// Styles
import styles from '@/styles/items.module.scss';

const Items = ({ todoId }: {
  todoId: string,
}): JSX.Element => {
  const { data } = useSWR(todoId && `/api/todo/${todoId}`);
  return (
    <>
      <div className={styles.items}>
        <ItemsList data={data} />
      </div>
      <div className={styles.items}>
        <ItemsList data={data} done={true} />
      </div>
    </>
  );
}

export default Items;
