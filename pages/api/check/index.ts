import { connectToDatabase } from "@/util/mongodb";
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { db }: { db: any } = await connectToDatabase();
  // const lists: Array<any> = [];


  switch (req.method) {
    case 'POST':
      const object: any = req.body;
      const lists = await Promise.all(object.flatMap(async e => {
        const query: any = await db
          .collection("todos")
          .findOne({ id: e });
          if (query) return { id: query.id, name: query.name };
      }));
      res.status(200).json(lists);
      break;
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
};