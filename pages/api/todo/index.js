import { connectToDatabase } from "@/util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const { todoId } = req.query;

  switch (req.method) {
    case 'POST':
      const object = req.body;
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