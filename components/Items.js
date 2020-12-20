import useSWR from 'swr';

import Item from '@/components/Item';

import styles from '@/styles/items.module.scss';

export default function Items ({ todoId }) {
  const { data } = useSWR(todoId && `/api/todo/${todoId}`);

  return (
    <div className={styles.items}>
      <Item items={data?.items} />
    </div>
  );
}