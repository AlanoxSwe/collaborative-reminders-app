// Dependencies
import Router from 'next/router';
import Axios from 'axios';
import lscache from 'lscache';
import bcrypt from 'bcryptjs';
// Utlis
import uuid from '@/util/uuid';

const getQueryFromItemId = async (query: any, ids: string[]): Promise<string> => {
  let arr = await query.items;
  let str = '';
  for (let i = 0; i < ids.length; i++) {
    const result = arr.find((e, index) => {
      if(e.id === ids[i]) str += `items.${index}.`;
      return e.id === ids[i];
    });
    arr = result.items ? result.items : arr;
  }
  return str;
}

const toggleCompleted = async (itemId: string): Promise<void> => {
  await Axios.put(`/api/item/${itemId}`)
}

const setCompleted = async (itemId: string): Promise<void> => {
  await Axios.put(`/api/item/${itemId}`, { set: true })
}

const toggleFreezeList = async (itemId: string): Promise<void> => {
  await Axios.put(`/api/item/freeze/${itemId}`);
}

const createList = async (name: string, password: string): Promise<void> => {
  const hashedPassword: string | null = password ? bcrypt.hashSync(password, 8) : null;
  const id: string[] = uuid.generate();
  await Axios.post('/api/todo', {
    id: id[0],
    name,
    password: hashedPassword,
    active: Number(1),
    shortId: id[1],
    items: [],
  }); 
  lscache.set('savedTodo', id[0]);
  Router.push(`/list/${id[0]}`);
};

const addBaseItem = async (todoId: string, titleRef, descRef, carbRef, fatRef, proteinRef): Promise<void> => {
  if(titleRef.current.value) {
    await Axios.post(`/api/item/base/${todoId}`, {
      id: uuid.generate()[1],
      name: titleRef.current.value,
      desc: descRef.current ? descRef.current.value : null,
      carbs: carbRef.current ? carbRef.current.value : null,
      fat: fatRef.current ? fatRef.current.value : null,
      protein: proteinRef.current ? proteinRef.current.value : null,
      baseParent: true,
      completed: Number(0),
      items: [],
    });
  }
}

const addItem = async (itemId: string, titleRef, descRef, carbRef, fatRef, proteinRef): Promise<void> => {
  if(titleRef.current.value) {
    await Axios.post(`/api/item/${itemId}`, {
      id: uuid.generate()[1],
      name: titleRef.current.value,
      desc: descRef.current ? descRef.current.value : null,
      carbs: carbRef.current ? carbRef.current.value : null,
      fat: fatRef.current ? fatRef.current.value : null,
      protein: proteinRef.current ? proteinRef.current.value : null,
      baseParent: false,
      completed: Number(0),
      items: [],
    });
  }
}

const deleteItem = async (itemId: string): Promise<void> => {
  await Axios.delete(`/api/item/${itemId}`)
}

export default {
  getQueryFromItemId,
  createList,
  addBaseItem,
  addItem,
  toggleCompleted,
  setCompleted,
  deleteItem,
  toggleFreezeList
}