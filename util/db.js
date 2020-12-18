import Router from 'next/router';
import Axios from 'axios';

import uuid from '@/util/uuid';


const createList = async () => {
  const id = uuid.generate();
  await Axios.post('/api/todo', {
    id: id[0],
    shortId: id[1],
    items: [],
  }); 
  Router.push(`/list/${id[0]}`);
};

const addItem = async (todoId, titleRef, descRef) => {
  if(titleRef.current.value) {
    console.log(titleRef.current.value);
    await Axios.post(`/api/item/${todoId}`, {
      id: uuid.generate()[1],
      name: titleRef.current.value,
      desc: descRef ? descRef.current.value : null,
      items: [],
    });
  }
}

export default {
  createList,
  addItem
}