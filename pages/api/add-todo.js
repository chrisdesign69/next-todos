import { connectToDatabase } from "@/app/configs/mongodb";

const handler = async (req, res) => {
  //Database
  const { db } = await connectToDatabase();
  const myCollection = process.env.TODOS_COLLECTION;

  const { method } = req;
  switch (method) {
    //----------------------------------POST------------------------------------
    //POST
    case "POST":
      try {
        const { todo } = req.body;
        const myTodos = {
          todo,
          "color": "red",
          completed: false
        };
        const newTodos = await db.collection(myCollection).insertOne(myTodos)
        res.status(201).json(newTodos);
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
