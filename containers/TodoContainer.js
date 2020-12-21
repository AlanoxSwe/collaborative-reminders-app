import React, { useRef } from 'react';

import Yjs from "@/components/Yjs";


const TodoContainer = React.forwardRef(({ type, connectionExists, room, ...props }, textInput) => {

  const inputArea = type === 'text' 
    ? (
      <input type="text"
        id={room}
        placeholder="Title..."
        ref={textInput}
        {...props}
      />
    )
    : (
      <textarea
        id={room}
        placeholder="Description..."
        ref={textInput}
        {...props}
      />
    );
  
  return (
    <>
      <Yjs
        room={room}
        connectionExists={connectionExists}
        textInput={textInput}
      />
      {inputArea}
    </>
  );
});

export default TodoContainer;
