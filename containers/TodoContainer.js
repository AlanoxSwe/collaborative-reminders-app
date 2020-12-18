import React, { useRef } from 'react';

import Yjs from "@/components/Yjs";


const TodoContainer = React.forwardRef(({ type, connectionExists, room, ...props }, textInput) => {

  const inputArea = type === 'text' 
    ? (
      <input type="text"
        id={room}
        placeholder={`${room}...`}
        ref={textInput}
        {...props}
      />
    )
    : (
      <textarea
        id={room}
        placeholder={`${room}...`}
        ref={textInput}
        {...props}
      />
    );
  
  return (
    <div>
      <Yjs
        room={room}
        connectionExists={connectionExists}
        textInput={textInput}
      />
      {inputArea}
    </div>
  );
});

export default TodoContainer;
