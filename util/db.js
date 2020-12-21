import Router from 'next/router';
import Axios from 'axios';

import uuid from '@/util/uuid';

const getQueryFromItemId = async (query, ids) => {
  let arr = await query.items;
  let str = '';
  for (let i = 0; i < ids.length; i++) {
    let result = arr.find((e, index) => {
      if(e.id === ids[i]) str += `items.${index}.`;
      return e.id === ids[i];
    });
    arr = result.items ? result.items : arr;
  }
  return str;
}

const toggleCompleted = async (itemId) => {
  await Axios.put(`/api/item/${itemId}`)
}

const createList = async () => {
  const id = uuid.generate();
  await Axios.post('/api/todo', {
    id: id[0],
    name: 'Todo List',
    shortId: id[1],
    items: [],
  }); 
  Router.push(`/list/${id[0]}`);
};

const addBaseItem = async (todoId, titleRef, descRef) => {
  if(titleRef.current.value) {
    await Axios.post(`/api/item/base/${todoId}`, {
      id: uuid.generate()[1],
      name: titleRef.current.value,
      desc: descRef ? descRef.current.value : null,
      baseParent: true,
      completed: Number(0),
      items: [],
    });
  }
}

const addItem = async (itemId, titleRef, descRef) => {
  if(titleRef.current.value) {
    await Axios.post(`/api/item/${itemId}`, {
      id: uuid.generate()[1],
      name: titleRef.current.value,
      desc: descRef ? descRef.current.value : null,
      baseParent: false,
      completed: Number(0),
      items: [],
    });
  }
}

const deleteItem = async (itemId) => {
  await Axios.delete(`/api/item/${itemId}`)
}


export default {
  getQueryFromItemId,
  createList,
  addBaseItem,
  addItem,
  toggleCompleted,
  deleteItem
}