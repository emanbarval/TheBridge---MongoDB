/*Este script es para insertar un documento en una colección de una base de datos.
 Para insertar el documento en una colección de una base de datos podemos usar 
 insertOne() Si queremos insertar varios será insertMany()*/
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
    //Creamos una variable que almacenará el contenido de uno o varios documentos
    //según el método seleccionado para la inserción
    //let miDocumento = {"nombre":"Demolition man"};
    //Array de documentos
    let misDocumentos = [
        {_id: 1, "nombre":"Juez Dredd"},
        {_id: 2, "nombre":"Matrix"},
        {_id: 3, "nombre":"Solo en casa"}];
    //Hacemos uso del método collection para recuperar la colección que tenemos entre paréntesis
    // y poder lanzar sobre ella el método de inserción seleccionado
                           //.insertOne()
    //Al método de inserción se le están pasando 2 argumentos
    //el/los documentos almacenados en la variable correspondiente [que será array para many]
    //y la función callback
    dbo.collection("Pelis90").insertMany(misDocumentos, (err, res)=>{
        if(err) throw err;
        //res contiene el objeto resultado de la introducción del/de los documentos
        console.log(res);
        db.close();
    })
    
})

/**/