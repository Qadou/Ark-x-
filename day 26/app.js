const {MongoClient }= require('mongodb');
const url ="mongodb://localhost:27017";
const client = new MongoClient(url);
client
.connect()
.then (()=> console.log('connected with database'))
.catch((error)=> console.log("error : ",error))
const db = client.db('test');
const collection = db.collection('users')

// collection.insertOne({name: 'hadiya',age: 24})

// .then((user)=> console.log("user created successfully",user))
// .catch((error)=> console.log("error : ",error))
// collection
//   .findOne()
//   .then((user) => console.log(user))
//   .catch((error) => console.log("Error: ", error));
collection
  .find()
  .then((users) => {
    console.log(users);
  })
  .catch((error) => console.log("Error: ", error));
