import React, { useEffect, useState } from 'react';

import Yjs from "@/components/Yjs";
import TextField from '@/components/common/TextField';
import TextareaField from '@/components/common/TextareaField';


const TodoContainer = React.forwardRef(({ type, connectionExists, room, placeholder, ...props }, textInput) => {
  const [inputArea, setInputArea] = useState(null);

  useEffect(() => {
    if(type === 'text') {
      setInputArea(
        <>
          <TextField 
            type="text"
            id={room}
            placeholder={placeholder}
            ref={textInput}
            {...props}
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
            {...props}
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
