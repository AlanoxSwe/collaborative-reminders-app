// Dependencies
import React from 'react';
// Components
import Item from '@/components/item/Item';

const ItemsList = ({ data, parentId, hasParent, completed, done }: {
  data: any,
  parentId?: string,
  hasParent?: boolean,
  completed?: boolean,
  done?: boolean,
}): JSX.Element => {

  const query = (e) => done ? e.completed : ((e.baseParent && !e.completed) || hasParent);

  return (
    <>
    {
      data &&
      data.items.map(e => 
        query(e) ? 
        <Item data={e} hasParent={hasParent} parentId={parentId} key={e.id} completed={completed ? completed : e.completed} />
        : null
      )
    }
    </>
  );
}

export default ItemsList;
