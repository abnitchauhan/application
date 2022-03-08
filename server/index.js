const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');

dotenv.config();
const app = express();

  const uri = process.env.API_URL;

 

const { MongoClient, ServerApiVersion } = require('mongodb'); 
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("users").collection("data");

  result = collection.find({}).toArray(function(err, result){
      if(err) throw err;
      console.log(result)
      client.close();
  })
  // perform actions on the collection object
    
});

app.get('/', (req, res) =>{
    console.log("GET REQUEST WORKING FOR HOMEPAGE");
     res.send("Hey Thre Mate !!");
})

app.listen(8000, 
    ()=>{
        console.log("Server Running on Port : http://localhost:8000")
        }
    );