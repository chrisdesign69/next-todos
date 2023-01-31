import { connectToDatabase } from "@/app/configs/mongodb";

const handler = async (req, res) => {
  //Database
  const { db } = await connectToDatabase();
  const myCollection = process.env.TODOS_COLLECTION;

  const { method } = req;
  switch (method) {
    //----------------------------------GET------------------------------------
    //GET
    case "GET":
      const filter = { completed: false }
      try {
        const allTodos = await db.collection(myCollection).find(filter).toArray();
        res.status(200).json(allTodos);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    //Default
    default:
      res.status(400).json({ success: false });
      break;
  }
};
export default handler;

// This is a basic API route in Next JS
// Pls test using Thunder Client
// Author: Chris
// Website: chris-cybersec.dev
