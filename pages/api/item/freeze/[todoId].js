import { connectToDatabase } from "@/util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const { todoId } = req.query;

  switch (req.method) {
    case 'PUT':
      const query = await db
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