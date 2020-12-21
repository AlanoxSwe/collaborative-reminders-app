import db from '@/util/db';

export default function Description ({ styles, item, fullId }) {
  return (
    <>
      <label className={styles.checkbox}>
        <input type="checkbox" checked={item.completed} readOnly={true} />
        <div className={styles.square} onClick={() => db.toggleCompleted(fullId)} />
        <span className={styles.title}>{item.name}</span>
      </label>
    </>
  );
}