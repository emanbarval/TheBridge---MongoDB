/*Este script es para crear una base de datos.
 Para crear una base de datos lo que hacemos es 
 intentar conectarnos a ella. Como no existe el
 sistema la creará*/
//cargamos el módulo de mongodb
const mongo = require('mongodb');
//Creamos una instancia de cliente de mongoDB
const MongoClient = mongo.MongoClient;
//Definimos la URL de la Base de Datos que queremos crear
const url = "mongodb://localhost:27017/MiBaseDeDatos";
//Desde la instancia del cliente de mongo llamamos al método connect
// que tiene como argumentos la url y la función callback
MongoClient.connect(url,(err, db) =>{
    //Si recibimos un error lo lanzamos como excepción
    if(err) throw err;
    console.log("Base de datos creada");
    //cerramos la base de datos
        db.close();
});