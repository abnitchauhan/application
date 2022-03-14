const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb'); 
 
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.API_URL; 
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 }); 

module.exports = client;