import Form from '@/containers/Form';
import styles from '@/styles/items.module.scss';
import db from '@/util/db';
import { useState } from 'react';
import Button from './common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';


import Description from './item/Description';
import Title from './item/Title';
import ItemsList from './ItemsList';

export default function Item ({ data, parentId }) {

  const [showForm, setShowForm] = useState(false);

  const fullId = (e) => parentId ? `${parentId}.${e.id}` : e.id;

  if (data) return (
    <>
      {
        <div className={`${styles.item} ${data.completed && styles.completed}`} key={data.id}>
          <div className={styles.itemHeader}>
            <Title styles={styles} item={data} fullId={fullId(data)} />
            <div className={styles.buttons}>
              <Button type="secondary" size="small" onClick={() => setShowForm(!showForm)}>
                {
                  !showForm ? 
                  <FontAwesomeIcon icon={faPlus} />
                  : <FontAwesomeIcon icon={faTimes} />

                }
              </Button>
              <Button type="danger" size="small" onClick={() => db.deleteItem(fullId(data))}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </div>
          </div>
          <Description styles={styles} desc={data.desc} />
          {
            showForm &&
            <Form connectionId={fullId(data)} connectionExists={true} base={false} className={styles.form}/>
          }
          {
            data.items && <ItemsList data={data} parentId={fullId(data)} />
          }
        </div>
      }
    </>
  );
  return null;
}