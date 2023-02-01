import { connectToDatabase } from "@/app/configs/mongodb";
import { ObjectId } from "mongodb"

const handler = async(req, res) => {
//Database
const { db } = await connectToDatabase()
const myCollection = process.env.TODOS_COLLECTION

const {  method } = req
switch(method) {

//----------------------------------PUT------------------------------------
//PUT
case 'PUT':

const { query: id } = req
const { todo } = req.body
const filter = { _id: ObjectId(id) }
const config = { $set: { todo } }

try {
const updateOne = await db.collection(myCollection).updateOne(filter, config);
res.status(201).json({ updateOne })
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