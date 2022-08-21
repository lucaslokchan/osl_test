import { connectToDatabase } from "../../../utils/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const { params } = req.query;

  const response = await db
    .collection("response")
    .find({ category: params[0] })
    .count();
  console.log(params);
  return res.json(response);

  //const params = req.query.params;
  // Send a response
  //res.status(200).json(params);
}
