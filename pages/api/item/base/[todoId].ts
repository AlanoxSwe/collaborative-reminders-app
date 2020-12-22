import { connectToDatabase } from "@/util/mongodb";
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { db } = await connectToDatabase();
  const { todoId }: { todoId?: string } = req.query;
  const object = req.body;
  switch (req.method) {
    case 'POST':
      await db
        .collection("todos")
        .updateOne(
          { id: todoId },
          { $push: { items: object } }
        );
      res.status(201).end();
      break;
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
};