const ObjTest = () => {

  const obj = {
    id: '2f4197eb-06ee-405e-a18a-768d12489086',
    shortId: '55skUKp9JSgHwh-PcS5u6S',
    items: [
      {
        id: '6sznBnkA28kP4yaQJNwh9T',
        name: 'mizgin',
        desc: 'oha',
        completed: true,
        baseParent: true,
        items: [
          {
            id: '6sznBnkA28uP4yaQJbbTb',
            name: 'lmoa',
            desc: 'agario',
            completed: false,
            parent: '6sznBnkA28kP4yaQJNwh9T',
            items: [
              {
                id: '6sznBnkA28uP4yaQJyUreT',
                name: 'lmoa',
                desc: 'agario',
                completed: false,
                parent: '6sznBnkA28uP4yaQJbbTb',
                items: []
              }
            ]
          }
        ]
      }
    ]
  }

  const myId = "6sznBnkA28uP4yaQJyUreT";
  const myIdParent = "6sznBnkA28uP4yaQJbbTb";

  const todo = obj.items.find(e => e.id === '6sznBnkA28kP4yaQJNwh9T');
  
  const items = todo.items.filter(e => e.items.length);

  console.log(items)




  return <div>
    {obj.id}
  </div>
}

export default ObjTest;