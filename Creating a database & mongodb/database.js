const { MongoClient, ObjectId } = require("mongodb");

const url =
  "mongodb+srv://username:password@clustername.mongodb.net/";

const client = new MongoClient(url);

const dbName = "Helloworld";

async function main() {
  await client.connect();
  console.log("connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("user");

  const data = {
    firstname: "sundar",
    lastname: "pichai",
    country: "INDIA",
  };

  const insertResult = await collection.insertMany([data]);
  console.log("inserteddata =>", insertResult);

  const findResult = await collection.find({}).toArray();
  console.log("Found documents=>", findResult);

  const countResult = await collection.countDocuments({});
  console.log("count of documents =>", countResult);

  //   update

  //   const updateResult =await collection.updateOne(
  //   { _id:new ObjectId ("689b8e7a1bfacff1ead77a9a") },
  //   { $set: { firstname: "Mint" } })
  //   console.log("updated document=>",updateResult);

  //to find document with same firstname

  const result = await collection.find({ firstname: "sundar" }).toArray();
  console.log("the document with same firstname", result);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
