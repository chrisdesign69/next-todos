import { connectToDatabase } from "@/app/configs/mongodb";
import { ObjectId } from "mongodb"

const handler = async(req, res) => {
//Database
const { db } = await connectToDatabase()
const myCollection = process.env.TODOS_COLLECTION

const {  method } = req
const { id } = req.body;
switch(method) {

//----------------------------------DELETE------------------------------------
//DELETE
case 'DELETE':

const filter = { _id: ObjectId(id) }

try {
const deleteTodo = await db.collection(myCollection).deleteOne(filter)
res.status(200).json({ deleteTodo })
} catch (error) {
res.status(400).json({ success: false })
}
break;


//Default
default:
res.status(400).json({ success: false })
break;
}
}
export default handler


// This is a basic API route in Next JS
// Pls test using Thunder Client
// Author: Chris
// Website: chris-cybersec.dev