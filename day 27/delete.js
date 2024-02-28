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
//Delete Users
const date =  new Date("2024-02-27T15:32:12.425+00:00")
console.log(date)
user.deleteMany({ createAt:{$lt: date} })
  .then((user) => {
    if (user) console.log("User deleted successfully: ", user);
    else console.log("User not found");
  })
  .catch((error) => console.log("Error deleting user: ", error));