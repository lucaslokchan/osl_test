const { MongoClient } = require("mongodb");

//const { MONGODB_URI, MONGODB_DB } = process.env;
const MONGODB_URI = process.env.MONGODB_URI;
// Replace the following with your Atlas connection string
const url =
  "mongodb+srv://admin:admin@cluster0.1yoplw5.mongodb.net/osl_chatbot?retryWrites=true&w=majority";
const client = new MongoClient(MONGODB_URI);

// The database to use
const dbName = "osl_chatbot";

async function insert() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db(dbName);
    // Use the collection "people"
    const col = db.collection("response");
    // Construct a document
    let personDocument = {
      name: { first: "Alan", last: "Turing" },
      birth: new Date(1912, 5, 23), // May 23, 1912
      death: new Date(1954, 5, 7), // May 7, 1954
      contribs: ["Turing machine", "Turing test", "Turingery"],
      views: 1250000,
    };
    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(personDocument);
    // Find one document
    const myDoc = await col.findOne();
    // Print to the console
    console.log(myDoc);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}
insert().catch(console.dir);
