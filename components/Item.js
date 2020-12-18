import styles from '@/styles/items.module.scss';

export default function Item ({ items }) {

  if (items) return (
    <>
      {
        items.map(e => 
          <div className={styles.item} key={e.id}>
            <p className={styles.title}>{e.name}</p>
            {
              e.desc ? <p className={styles.desc}>{e.desc}</p>
              : null
            }
            {
              e.items ? <Item items={e.items} />
              : null
            }
          </div>
        )
      }
    </>
  );
  return null;
}