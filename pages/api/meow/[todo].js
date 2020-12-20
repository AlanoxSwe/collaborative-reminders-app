import { connectToDatabase } from "@/util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const { todo } = req.query;

  switch (req.method) {
    case 'GET':
      const query = await db
        .collection("todos")
        .updateOne(
          { items: { $elemMatch: { id: todo } } },
          { "$set": { "items.$.completed": true } }
        );
        // .findOne({ items: { $elemMatch: { id: todo } } });
      // const item = query.items.find(e => e.id === todo);
      res.status(200).json(query);
      break;
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
};