var MongoClient = require('mongodb').MongoClient
const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("ice_");
database.dropDatabase()
database = client.db("ice_");
const cats = database.collection("ice_");
const result = await cats.insertOne({name:"Лед"});
console.log(`${result} documents were inserted`);
} finally {
await client.close();
}
}
run()
