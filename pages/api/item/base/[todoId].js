import { connectToDatabase } from "@/util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const { todoId } = req.query;
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