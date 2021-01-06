import Axios from 'axios';
import lscache from 'lscache';

const addList = (id: string): void => {
  const cache = lscache.get('savedTodos') ? lscache.get('savedTodos') : []; 
  cache.push(id);
  lscache.set('savedTodos', cache);
}; 

const checkLists = async (lists: Array<string>): Promise<any> => {
  const data = await Axios.post('/api/check', lists);
  if (data) return data.data;
};

const getLists = async (): Promise<any> => {
  const cache = lscache.get('savedTodos') ? lscache.get('savedTodos') : []; 
  if(cache.length) {
    const lists = await checkLists(cache);
    return lists;
  }
  return null;
}

export default { addList, getLists };
