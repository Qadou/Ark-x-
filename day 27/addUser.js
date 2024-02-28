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

const newUser = new user({
    name:"mark",
    email:"mark@gmail.com",
    age:30
})
newUser
    .save()
    .then((user) => console.log("User created succesfully: ", user))
    .catch((error) => console.log("Error creating user: ", error));
