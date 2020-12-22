import React, { useEffect, useState } from 'react';

import Yjs from "@/components/Yjs";


const TodoContainer = React.forwardRef(({ type, connectionExists, room, ...props }, textInput) => {
  const [inputArea, setInputArea] = useState(null);

  useEffect(() => {
    if(type === 'text') {
      setInputArea(
        <>
          <input type="text"
            id={room}
            placeholder="Title..."
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
          <textarea
            id={room}
            placeholder="Description..."
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
