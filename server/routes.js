const express = require('express');
const router  = express.Router(); 
const client = require('./db');
 

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  });

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

client.connect(err => {
    const dataCollection = client.db("users").collection("data"); 
    result = dataCollection.find({}).toArray(function(err, result){ 
        if(err) throw err; 
       
        router.get('/', (req,res) => {
        res.send(result) 
            });
        });

        router.post('/add', (req, res) =>{    
        var insert_values = {id: req.body.id_no, name: req.body.user_name, profession: req.body.profession}; 
       
        dataCollection.insertOne(insert_values)
        .then(data =>{
            res.redirect('/');
            console.log(data);
            client.close();
        })
        .catch(error => console.error(error)) 

      
        });
      
   
    });
  
module.exports = router;