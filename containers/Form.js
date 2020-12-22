import { useRef, useState, useContext } from 'react';

import db from '@/util/db';

import TodoContainer from '@/containers/TodoContainer';
import Button from '@/components/common/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import styles from '@/styles/form.module.scss';
import ConnectionContext from '@/context/Connection';

export default function Form ({ connectionId, base, className }) {
  const [showSpecial, setShowSpecial] = useState(false);
  const { connectionExists, toggleConnection } = useContext(ConnectionContext);

  // From
  const form = useRef();
  // General
  const textInput = useRef();
  const descInput = useRef();
  // Extra
  const carbInput = useRef();
  const fatInput = useRef();
  const proteinInput = useRef();
  
  const resetForm = (e) => {
    console.log(e);
  }


  return (
    <form className={`${styles.form} ${className}`} onSubmit={e => resetForm(e)}>
      <TodoContainer 
        type='text'
        ref={textInput}
        extraClass={styles.textField}
        placeholder="Title..."
        connectionExists={connectionExists}
        room={`${connectionId}`}
      />
      <TodoContainer 
        type='textarea'
        room={`${connectionId}-desc`}
        connectionExists={connectionExists}
        ref={descInput}
        extraClass={styles.textField}
        placeholder="Description..."
      />

      {showSpecial &&
        <div className={styles.specialFields}>
          <TodoContainer 
            type='text'
            room={`${connectionId}-carbs`}
            connectionExists={connectionExists}
            ref={carbInput}
            placeholder="Carbs..."
          />
          <TodoContainer 
            type='text'
            room={`${connectionId}-fat`}
            connectionExists={connectionExists}
            ref={fatInput}
            placeholder="Fat..."
          />
          <TodoContainer 
            type='text'
            room={`${connectionId}-protein`}
            connectionExists={connectionExists}
            ref={proteinInput}
            placeholder="Protein..."
          />
        </div>
      }

      <div className={styles.buttons}>
        <Button type="link" className={styles.specialButton} onClick={(e) => {e.preventDefault(); setShowSpecial(!showSpecial)}}>
          <div>Special Fields</div>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={showSpecial ? faChevronUp : faChevronDown} />
          </div>
        </Button>
        {
          base ? <Button type="secondary" onClick={(e) => { e.preventDefault(); db.addBaseItem(connectionId, textInput, descInput, carbInput, fatInput, proteinInput); resetForm(); }}>Add</Button>
          : <Button type="secondary" onClick={(e) => { e.preventDefault(); db.addItem(connectionId, textInput, descInput, carbInput, fatInput, proteinInput) }}>Add</Button>
        }
      </div>
    </form>
  );

}