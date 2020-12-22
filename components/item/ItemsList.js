
import Item from '@/components/item/Item';

export default function ItemsList ({ data, parentId, completed }) {

  return (
    <>
    {
      data &&
      data.items.map(e => 
        <Item data={e} parentId={parentId} key={e.id} completed={completed ? completed : e.completed} />
      )
    }
    </>
  );
}