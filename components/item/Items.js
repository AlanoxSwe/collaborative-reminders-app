import useSWR from 'swr';

import ItemsList from '@/components/item/ItemsList';

import styles from '@/styles/items.module.scss';

export default function Items ({ todoId }) {
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