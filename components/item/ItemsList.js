
import Item from '@/components/item/Item';

export default function ItemsList ({ data, parentId, hasParent, completed, done }) {

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