//Dependencies
import { useState } from 'react';
//Utils
import db from '@/util/db';
//Components
import Form from '@/containers/Form';
import Actions from './Actions';
import Description from './Description';
import ItemsList from './ItemsList';
//Styles
import styles from '@/styles/items.module.scss';

export default function Item ({ data, parentId, completed }) {
  const [showForm, setShowForm] = useState(false);
  
  const fullId = (e) => parentId ? `${parentId}.${e.id}` : e.id;
  
  if(completed) db.setCompleted(fullId(data));

  const completedCheck = completed ? completed : data.completed;

  if (data) return (
    <>
      {
        <div className={`${styles.item} ${data.completed && styles.completed}`} key={data.id}>
          <div className={styles.itemHeader}>
            <label className={styles.checkbox}>
              <input type="checkbox" checked={completedCheck} readOnly={true} />
              <div className={styles.square} onClick={() => {db.toggleCompleted(fullId(data)); setShowForm(false)}} />
              <span className={styles.title}>{data.name}</span>
            </label>
            <Actions styles={styles} showForm={showForm} setShowForm={setShowForm} completedCheck={completedCheck} data={data} fullId={fullId(data)} />
          </div>
          <Description styles={styles} data={data} />
          {
            showForm &&
            <Form connectionId={fullId(data)} connectionExists={true} base={false} className={styles.form}/>
          }
          {
            data.items && <ItemsList data={data} parentId={fullId(data)} completed={data.completed} />
          }
        </div>
      }
    </>
  );
  return null;
}