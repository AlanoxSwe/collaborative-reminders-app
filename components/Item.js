import styles from '@/styles/items.module.scss';

export default function Item ({ items, parentId }) {

  const markDone = () => {

  }

  if (items) return (
    <>
      {
        items.map(e => 
          <div className={styles.item} key={e.id}>
            {parentId ? `${parentId}.${e.id}` : e.id}
            <label className={styles.checkbox}>
              <input type="checkbox" />
              <div className={styles.square} onClick={() => markDone(e.id)} />
              <span className={styles.title}>{e.name}</span>
            </label>
            {
              e.desc ? <p className={styles.desc}>{e.desc}</p>
              : null
            }
            {
              e.items ? <Item items={e.items} parentId={
                parentId ? `${parentId}.${e.id}` : e.id
              } />
              : null
            }
          </div>
        )
      }
    </>
  );
  return null;
}