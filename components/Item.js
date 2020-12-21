import styles from '@/styles/items.module.scss';
import db from '@/util/db';
import Button from './common/Button';

import Description from './item/Description';
import Title from './item/Title';

export default function Item ({ items, parentId }) {

  const fullId = e => parentId ? `${parentId}.${e.id}` : e.id;

  if (items) return (
    <>
      {
        items.map(e => 
          <div className={`${styles.item} ${e.completed && styles.completed}`} key={e.id}>
            <div className={styles.itemHeader}>
              <Title styles={styles} item={e} fullId={fullId(e)} />
              <div className={styles.buttons}>
                <Button type="secondary" text="Add" size="small" onClick={() => db.addItem(fullId(e))} />
                <Button type="danger" text="Delete" size="small" onClick={() => db.deleteItem(fullId(e))} />
              </div>
            </div>
            <Description styles={styles} desc={e.desc} />
            {
              e.items && <Item items={e.items} parentId={fullId(e)} />
            }
          </div>
        )
      }
    </>
  );
  return null;
}