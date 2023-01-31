import { connectToDatabase } from "@/app/configs/mongodb";
import { ObjectId } from "mongodb"

const handler = async(req, res) => {
//Database
const { db } = await connectToDatabase()
const myCollection = process.env.TODOS_COLLECTION

const {  method } = req
const { id } = req.body;
switch(method) {

//----------------------------------PUT------------------------------------
//PUT
case 'PUT':
const filter = { _id: ObjectId(id) }
const config = {
$set: { completed: true, color: "blue"}
}

try {
await db.collection(myCollection).updateOne(filter, config);
const completeOne = await db.collection(myCollection).findOne(filter);
res.status(200).json({ completeOne })
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