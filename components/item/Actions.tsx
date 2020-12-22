//Dependencies
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
//Utils
import db from '@/util/db';
//Components
import Button from '@/components/common/Button';


const Actions = ({ styles, showForm, setShowForm, completedCheck, fullId }: {
  styles: { [key: string]: string },
  showForm: boolean,
  setShowForm: (boolean) => void,
  completedCheck: boolean,
  fullId: string,
}): JSX.Element => {

  return (
    <div className={styles.buttons}>
      <Button type="secondary" size="small" onClick={() => setShowForm(!showForm)} disabled={completedCheck}>
        {
          !showForm ? 
          <FontAwesomeIcon icon={faPlus} />
          : <FontAwesomeIcon icon={faTimes} />

        }
      </Button>
      <Button type="danger" size="small" onClick={() => {setShowForm(false); db.deleteItem(fullId)}}>
        <FontAwesomeIcon icon={faTrash} />
      </Button>
    </div>
  );
}

export default Actions;
