// Dependencies
import React, { useState, useRef } from 'react';
import bcrypt from 'bcryptjs';
// Utils
import db from '@/util/db';
// Components
import Button from '@/components/common/Button';
import Error from '@/components/common/Error';
import TextField from '@/components/common/TextField';

const Freeze = ({ styles, data }: {
  styles: { [key: string]: string },
  data: any
}): JSX.Element => {
  const [showError, setShowError] = useState(false);
  const password = useRef<HTMLInputElement>(null);

  const freezeList = e => {
    e.preventDefault();
    if(data && password.current.value) {
      if(bcrypt.compareSync(password.current.value, data.password)){
        setShowError(false);
        db.toggleFreezeList(data.id);
      }
      else {
        setShowError(true);
      }
    }
  }

  return (
    <div className={styles.freeze}>
      <h2>List availability</h2>
      {showError && <Error text="Wrong password" type="danger" />}
      <form className={styles.freezeForm}>
        <TextField type="password" extraClass={`${styles.textField} ${showError && styles.error}`} text="Password..." ref={password} />
        {
          data?.active ?
          <Button type="danger" onClick={(e) => freezeList(e)}>Freeze</Button>
          : <Button type="primary" onClick={(e) => freezeList(e)}>Unfreeze</Button>
        }
      </form> 
      <p>
        Freezing your to-do list will halt all users connected from manipulating the list.
      </p>
    </div>
  );
}

export default Freeze;
