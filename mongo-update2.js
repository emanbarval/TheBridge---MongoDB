const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, db)=>{
    if(err) throw err;
    const dbo = db.db("my_Fake_DB");
    const nuevoValor = {$set: {"nombre":"Francisco"}}
    const query = {"nombre":"Paco"};
    dbo.collection("movies").updateMany(query, nuevoValor, (err, res)=>{
        if(err) throw err;
        dbo.collection("movies").find({}).toArray((err, result)=>{
            console.log(result);
        })
        db.close();
    })
        
})