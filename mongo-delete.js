/*Con este script vamos a borrar documentos almacenados en nuestra base de datos*/
//En un único paso cargamos el módulo de mongodb y Creamos una instancia de cliente de mongoDB
const MongoClient = require('mongodb').MongoClient;
////Definimos la URL de nuestro server mongo
const url = "mongodb://localhost:27017";
//Desde la instancia del cliente de mongo llamamos al método connect
// que tiene como argumentos la url y la función callback
MongoClient.connect(url, (err, db)=>{
    //Si recibimos un error lo lanzamos como excepción
    if(err) throw err;
    const dbo = db.db("my_Fake_DB");
    let misDocumentos = [
        {"nombre":"Paco"},
        {"nombre":"Paco"},
        {"nombre":"Paco"}
    ];
    dbo.collection("movies").insertMany(misDocumentos)
    
    const query = {};
    dbo.collection("movies").find({"nombre":"Paco"}).toArray((err, res)=>{
        console.log(res[res.length-1]._id);
        
        dbo.collection("movies").deleteOne({"_id": ObjectId(res[res.length-1]._id)});
        dbo.collection("movies").find({}).toArray((err, res)=>{
            console.log(res);})
    /*})
    
    dbo.dropCollection("movies", (err, delOK)=>{

       //.deleteMany(query, (err, res)=>{
        if(err) throw err;
            console.log(delOK);
            console.log(dbo);*/
        db.close();
    })
})