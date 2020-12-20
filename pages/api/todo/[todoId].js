import { connectToDatabase } from "@/util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const { todoId } = req.query;

  switch (req.method) {
    case 'GET':
      const todo = await db
        .collection("todos")
        .findOne({ id: todoId });
      if(todo) return res.status(200).json(todo);
      res.status(404).end();
      break;
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
};