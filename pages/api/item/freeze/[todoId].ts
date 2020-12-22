import { connectToDatabase } from "@/util/mongodb";
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { db } = await connectToDatabase();
  const { todoId }: { todoId?: string } = req.query;
  switch (req.method) {
    case 'PUT':
      const query: any = await db
        .collection("todos")
        .updateOne(
          { id: todoId },
          { "$bit": { "active": { "xor": Number(1) } } }
        );
      if(query) return res.status(201).json(query);
      res.status(404).end();
      break;
    default:
      res.setHeader('Allow', ['PUT'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
};