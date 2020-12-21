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
            id: 'ttt'
          },
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

  // const todo = obj.items.find(e => e.id === '6sznBnkA28kP4yaQJNwh9T');

  // const string = "6sznBnkA28uP4yaQJbbTb.6sznBnkA28uP4yaQJyUreT";

  // const ids = string.split(".");

  // let arr = todo.items;
  // let pos = [];

  // for (let i = 0; i < ids.length; i++) {
  //   let res = arr.find((e, index) => {
  //     if(e.id === ids[i]) pos.push(index); //THIS right here!
  //     return e.id === ids[i]
  //   });
  //   if(res) arr = res.items
  // }
  // console.log(pos);

  const text = 'abcdef'
  const editedText = text.slice(text.length-3) //'abcde'

  // let res = arr.find(e => e.id === ids[1]);
  // console.log(res.items);

  // ids.forEach(e => items.items.find(m => m.id === e));

  
  // console.log(tesy)




  return <div>
    {editedText}
  </div>
}

export default ObjTest;