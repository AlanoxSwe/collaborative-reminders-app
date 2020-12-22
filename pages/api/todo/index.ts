import { connectToDatabase } from "@/util/mongodb";
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { db }: { db: any } = await connectToDatabase();

  switch (req.method) {
    case 'POST':
      const object: any = req.body;
      await db
        .collection("todos")
        .insertOne(object, (err) => {
          if (err) throw err;
          res.status(201).json(object)
        });
      break;
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
};