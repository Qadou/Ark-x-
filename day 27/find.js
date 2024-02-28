const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/test")
.then(() => console.log("Connected to database"))
.catch((error) => console.log("Error: ", error));
const userSchema  = new mongoose.Schema({
    name:{type :String, required:true},
    email:{type :String, required:true,unique:true},
    age:{type:Number,required:true},
    createAt:{type:Date, default:Date.now}
})
const user = mongoose.model('User', userSchema);

// //Fetch Users 

// user.find({})
//   .then((users) => console.log(users))
//   .catch((error) => console.log("Error fetching users: ", error));
// // Find a User:
user.findOne({ name: "mike"  },{email:0})
  .then((user) => {
    if (user) console.log(user);
    else console.log("User not found");
  })