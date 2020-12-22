// Dependencies
import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
// Utils
import db from '@/util/db';
// Components
import TodoContainer from '@/containers/TodoContainer';
import Button from '@/components/common/Button';
// Styles
import styles from '@/styles/form.module.scss';

const Form = ({ connectionId, base, className, setShowForm }: {
  connectionId: string,
  base: boolean,
  setShowForm?: (boolean) => void,
  className?: string,
}): JSX.Element => {
  const [showSpecial, setShowSpecial] = useState(false);
  const [value, setValue] = useState(true);

  const forceUpdate = (): void => {
    setValue(false);
    if (setShowForm) setShowForm(false);
  }

  useEffect(() => {
    if (base) setValue(true)
  }, [value]);
  
  // General
  const textInput = useRef<HTMLInputElement>(null);
  const descInput = useRef<HTMLTextAreaElement>(null);
  // Specials
  const carbInput = useRef<HTMLInputElement>(null);
  const fatInput = useRef<HTMLInputElement>(null);
  const proteinInput = useRef<HTMLInputElement>(null);


  if (value) return (
    <form className={`${styles.form} ${className}`}>
        <>
          <TodoContainer 
            type='text'
            ref={textInput}
            extraClass={styles.textField}
            placeholder="Title..."
            room={`${connectionId}`}
            />
          <TodoContainer 
            type='textarea'
            room={`${connectionId}-desc`}
            ref={descInput}
            extraClass={styles.textField}
            placeholder="Description..."
          />
        </>

      {showSpecial &&
        <div className={styles.specialFields}>
          <TodoContainer 
            type='text'
            room={`${connectionId}-carbs`}
            ref={carbInput}
            placeholder="Carbs..."
          />
          <TodoContainer 
            type='text'
            room={`${connectionId}-fat`}
            ref={fatInput}
            placeholder="Fat..."
          />
          <TodoContainer 
            type='text'
            room={`${connectionId}-protein`}
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
          base ? <Button type="secondary" onClick={(e) => { e.preventDefault(); db.addBaseItem(connectionId, textInput, descInput, carbInput, fatInput, proteinInput); forceUpdate(); }}>Add</Button>
          : <Button type="secondary" onClick={(e) => { e.preventDefault(); db.addItem(connectionId, textInput, descInput, carbInput, fatInput, proteinInput); forceUpdate(); }}>Add</Button>
        }
      </div>
    </form>
  );
  return null
}

export default Form;
