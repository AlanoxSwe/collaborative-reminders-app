
import Item from '@/components/Item';

export default function ItemsList ({ data, parentId }) {

  return (
    <>
    {
      data &&
      data.items.map(e => 
        <Item data={e} parentId={parentId} key={e.id}/>
      )
    }
    </>
  );
}