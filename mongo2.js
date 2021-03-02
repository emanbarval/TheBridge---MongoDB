/*Este script es para crear una colección en una base de datos.
 Para crear una colección en una base de datos lo que hacemos es 
 usar el método crear base de datos*/
//cargamos el módulo de mongodb
const mongo = require('mongodb');
//Creamos una instancia de cliente de mongoDB
const MongoClient = mongo.MongoClient;
//Definimos la URL donde se aloja la Base de Datos a la que queremos añadir la colección
const url = "mongodb://localhost:27017/";
MongoClient.connect(url,(err, db) =>{
    //Si recibimos un error lo lanzamos como excepción
    if(err) throw err;
    //Creamos una instancia de la base de datos que se especifica entre paréntesis
    //y que comparte el socket de la conexión existente
    let dbo = db.db("MiBaseDeDatos");
    //Usamos el método createCollection de db para crear la colección.
    //El método createCollection tiene dos argumentos el primero es el nombre de la colección
    //y el segundo es la función de callback
    dbo.createCollection("Pelis90", (err, res)=>{
        //Si recibimos un error lo lanzamos como excepción
        if(err) throw err;
        console.log('Colección creada');
        //cerramos la base de datos
        db.close();
    })
    
})

/**/