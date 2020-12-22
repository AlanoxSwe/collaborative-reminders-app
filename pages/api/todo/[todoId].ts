import { connectToDatabase } from "@/util/mongodb";
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { db } = await connectToDatabase();
  const { todoId }: { todoId?: string } = req.query;

  switch (req.method) {
    case 'GET':
      const query: any = await db
        .collection("todos")
        .findOne({ id: todoId });
      if(query) return res.status(200).json(query);
      res.status(404).end();
      break;
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
};