import { connectToDatabase } from "../../utils/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  // Take user input

  // Get a document into the collection
  const response = await db
    .collection("response")
    .find({ category: { $exists: true }, location: "GBR" })
    .toArray();
  res.json(response);
  // Send a response
  //res.status(200).json({
  //  data: await db.collection("response").findOne({ id: response.insertedId }),
  //  message: "Response added successfully",
  //});
}
