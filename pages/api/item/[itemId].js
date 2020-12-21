import { connectToDatabase } from "@/util/mongodb";
import util from '@/util/db';

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const { itemId } = req.query;
  
  const object = req.body;
  
  const ids = itemId.split(".");
  const query = await db
    .collection("todos")
    .findOne(
      { items: { $elemMatch: { id: ids[0] } } }
    );
  const queryString = await util.getQueryFromItemId(query, ids);
  
  switch (req.method) {
    case 'PUT':
      const putUpdate = await db
        .collection("todos")
        .updateOne(
          { items: { $elemMatch: { id: ids[0] } } },
          { "$bit": { [`${queryString}completed`]: { "xor": Number(1) } } }
        );
      res.status(200).json(putUpdate);
    break;
    case 'POST':
      const postUpdate = await db
        .collection("todos")
        .updateOne(
          { items: { $elemMatch: { id: ids[0] } } },
          { "$push": { [`${queryString}items`]: object } }
        );
      res.status(201).json(postUpdate);
    break;
    case 'DELETE':
      const deleteUpdate = await db
        .collection("todos")
        .updateOne(
          { items: { $elemMatch: { id: ids[0] } } },
          { "$pull": { [queryString.slice(0, -3)]: { id: ids[ids.length-1] }  } } 
        );
      res.status(200).json(deleteUpdate);
    break;
    default:
      res.setHeader('Allow', ['PUT', 'POST', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    break;
  }
};