const express = require('express')
const app = express()
const port =3000;
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Hello Ark x');
})
app.get('/add/:name/:age',(req,res)=>{
res.send(req.params)
});
let courses =[];
app.post('/add',(req,res)=>{
    const course ={
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
})
app.listen(port);
