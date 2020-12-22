// Dependencies
import React, { useEffect, useState, useContext } from 'react';
// Components
import Yjs from "@/components/Yjs";
import TextField from '@/components/common/TextField';
import TextareaField from '@/components/common/TextareaField';
// Context
import ConnectionContext from '@/context/Connection';

const TodoContainer = React.forwardRef(({ type, room, placeholder, extraClass }: {
  type: string,
  room: string,
  placeholder: string,
  extraClass?: string,
}, textInput: any) => {
  const [inputArea, setInputArea] = useState(null);
  const connectionExists = useContext(ConnectionContext);

  useEffect(() => {
    if(type === 'text') {
      setInputArea(
        <>
          <TextField 
            type="text"
            text={placeholder}
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
            text={placeholder}
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

TodoContainer.displayName = 'TodoContainer';
export default TodoContainer;
