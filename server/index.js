const express = require('express');
const {MongoClient} = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const URL = process.env.API_URL;

app.get('/', (req, res) =>{
    console.log("GET REQUEST WORKING FOR HOMEPAGE");
     res.send("Hey Thre Mate !!");
})

app.listen(8000, 
    ()=>{
        console.log("Server Running on Port : http://localhost:8000")
        }
    );