import { useState, useRef } from 'react';
import { useRouter } from "next/router";

import TodoContainer from '@/containers/TodoContainer';
import Items from '@/components/Items';
import db from '@/util/db';

export default function Todo () {
  const [connectionExists, setConnectionExists] = useState(true);
  const textInput = useRef();
  const descInput = useRef();

  const router = useRouter();
  const { todoId } = router.query;

  return (
    <>
      <TodoContainer 
        type='text'
        room={`${todoId}`}
        connectionExists={connectionExists}
        ref={textInput}
      />

      <TodoContainer 
        type='textarea'
        room={`${todoId}-desc`}
        connectionExists={connectionExists}
        ref={descInput}
      />

      <button onClick={() => db.addItem(todoId, textInput, descInput)}>Add</button>

      <Items todoId={todoId} />
    </>
  );
}