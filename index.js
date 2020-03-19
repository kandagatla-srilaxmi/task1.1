// const express=require('express') ;
// const app=express();
// const cors=require('cors');
// app.use(express.json());
// app.use(cors());
// empData=[{
//     "id":1,
//     "name":"sri",
//     "age":21,
//     "role":"SE"
// },
// {
//     "id":2,
//     "name":"roohi",
//     "age":24,
//     "role":"Tester"
// },
// {
//     "id":3,
//     "name":"manasa",
//     "age":23,
//     "role":"Developer"
// }]
// app.get("/get",(req,res)=>{
//     res.send(empData);
// });
const express = require('express');
const app = express();
const cors = require('cors');
const student = require('./router/student');

app.use(cors());
app.use(express.json());
app.use(student);


app.listen(5000);
console.log("Server running at 5000");
