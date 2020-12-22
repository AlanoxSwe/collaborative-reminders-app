//Dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
//Utils
import db from '@/util/db';
//Components
import Button from '@/components/common/Button';


export default function Actions ({ styles, showForm, setShowForm, completedCheck, data, fullId }) {

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