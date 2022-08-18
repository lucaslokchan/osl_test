import { connectToDatabase } from "../../utils/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  // Take user input
  const { title } = req.body;
  // Insert a document into the collection
  const response = db.collection("response").insertOne({
    name: req.body.name,
    location: req.body.location,
    category: req.body.category,
    question: req.body.question,
  });
  // Send a response
  res.status(200).json({
    data: await db.collection("response").findOne({ id: response.insertedId }),
    message: "Todo added successfully",
  });
}
