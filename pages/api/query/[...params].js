import { connectToDatabase } from "../../../utils/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const { params } = req.query;
  if (params[0] == "all" && params[1] !== "all") {
    const response = await db
      .collection("response")
      .find({ location: { $exists: true }, category: params[1] })
      .toArray();
    console.log(params);
    return res.json(response);
  } else if (params[0] !== "all" && params[1] == "all") {
    const response = await db
      .collection("response")
      .find({ location: params[0], category: { $exists: true } })
      .toArray();
    console.log(params);
    return res.json(response);
  } else if (params[0] == "all" && params[1] == "all") {
    const response = await db
      .collection("response")
      .find()
      .toArray();
    console.log(params);
    return res.json(response);
  } else {
    const response = await db
      .collection("response")
      .find({ location: params[0], category: params[1] })
      .toArray();
    console.log(params);
    return res.json(response);
  }

  //const params = req.query.params;
  console.log(params);
  // Send a response
  //res.status(200).json(params);
}
