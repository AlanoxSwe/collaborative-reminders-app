import Button from '@/components/common/Button';
import bcrypt from 'bcryptjs';
import TextField from '../common/TextField';

import db from '@/util/db';

import { useState, useRef } from 'react';

export default function Freeze ({ styles, data }) {
  const [showError, setShowError] = useState(false);
  const password = useRef();

  
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
      {showError && <h1>Wrong password</h1>}
      <h2>List availability</h2>
      <form className={styles.freezeForm}>
        <TextField type="password" className={styles.textField} placeholder="Password..." ref={password} />
        {
          data?.active ?
          <Button type="danger" onClick={(e) => freezeList(e)}>Freeze</Button>
          : <Button type="primary" onClick={(e) => freezeList(e)}>Unfreeze</Button>
        }
      </form> 
    </div>
  );
}