const express = require('express'); 
// const MongoClient = require('mongodb').MongoClient; 
const route = require('./routes');

const app = express();
 
app.use('/', route);

// app.get('/', (req, res) =>{
//     console.log("GET REQUEST WORKING FOR HOMEPAGE");
//      res.send("Hey There Mate !!");
// })

app.listen(8000, 
()=>{
    console.log("Server Running on Port : http://localhost:8000")
    }
);