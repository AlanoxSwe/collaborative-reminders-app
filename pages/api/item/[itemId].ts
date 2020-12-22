import { connectToDatabase } from "@/util/mongodb";
import { NextApiRequest, NextApiResponse } from 'next'
import util from '@/util/db';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { db } = await connectToDatabase();
  const { itemId }: { itemId?: string } = req.query;
  const object = req.body;
  const ids: string[] = itemId.split(".");
  
  const query = await db
    .collection("todos")
    .findOne(
      { items: { $elemMatch: { id: ids[0] } } }
    );

  const queryString: string = await util.getQueryFromItemId(query, ids);
  
  switch (req.method) {
    case 'PUT':
      if(req.body.set) {
        // Set completed
        const putUpdate: any = await db
          .collection("todos")
          .updateOne(
            { items: { $elemMatch: { id: ids[0] } } },
            { "$set": { [`${queryString}completed`]: Number(1) } }
          );
        res.status(200).json(putUpdate);
      }
      else {
        //Toggle completed
        const putUpdate: any = await db
          .collection("todos")
          .updateOne(
            { items: { $elemMatch: { id: ids[0] } } },
            { "$bit": { [`${queryString}completed`]: { "xor": Number(1) } } }
          );
        res.status(200).json(putUpdate);
      }
    break;
    case 'POST':
      const postUpdate: any = await db
        .collection("todos")
        .updateOne(
          { items: { $elemMatch: { id: ids[0] } } },
          { "$push": { [`${queryString}items`]: object } }
        );
      res.status(201).json(postUpdate);
    break;
    case 'DELETE':
      const deleteUpdate: any = await db
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