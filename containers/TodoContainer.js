import React, { useEffect, useState, useContext } from 'react';

import Yjs from "@/components/Yjs";
import TextField from '@/components/common/TextField';
import TextareaField from '@/components/common/TextareaField';

import ConnectionContext from '@/context/Connection';

const TodoContainer = React.forwardRef(({ type, room, placeholder, extraClass }, textInput) => {
  const [inputArea, setInputArea] = useState(null);
  const { connectionExists } = useContext(ConnectionContext);

  useEffect(() => {
    if(type === 'text') {
      setInputArea(
        <>
          <TextField 
            type="text"
            id={room}
            placeholder={placeholder}
            ref={textInput}
            extraClass={extraClass}
          />
          <Yjs
            room={room}
            connectionExists={connectionExists}
            textInput={textInput}
          />
        </>
      );
    }
    else {
      setInputArea(
        <>
          <TextareaField
            id={room}
            placeholder={placeholder}
            ref={textInput}
            extraClass={extraClass}
          />
          <Yjs
            room={room}
            connectionExists={connectionExists}
            textInput={textInput}
          />
        </>
      );
    }
  }, []);
  
  return (
    <>
      {inputArea}
    </>
  );
});

export default TodoContainer;
