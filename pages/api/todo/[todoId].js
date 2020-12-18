import { connectToDatabase } from "@/util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const { todoId } = req.query;

  switch (req.method) {
    case 'GET':
      const todo = await db
        .collection("todos")
        .findOne({ id: todoId });
      res.status(200).json(todo);
      break;
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
};