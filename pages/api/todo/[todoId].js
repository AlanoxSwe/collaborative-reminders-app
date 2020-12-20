import { connectToDatabase } from "@/util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const { todoId } = req.query;

  switch (req.method) {
    case 'GET':
      const query = await db
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