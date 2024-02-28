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
//Create a New User:



//Update User Email:
  user.findOneAndUpdate({ name: "mike" },
  { $set:{email:"mike@gmail.com",createAt:new Date}})
  .then((user) => {
          if (user) console.log("User updated successfully: ", user);
          else console.log("User not found");
        })