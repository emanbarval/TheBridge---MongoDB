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
//Creamos una instancia de la base de datos que se especifica entre paréntesis
    //y que comparte el socket de la conexión existente
    const dbo = db.db("my_Fake_DB");
    //Utilizamos el método dropCollection al que se le pasan dos argumentos
    //por un lado la colección a eliminar y por otro una callback con dos argumentos
    //el error y un booleano que llamamos delOK[BorradoOK] que es true si hay éxito o false si no
    dbo.dropCollection("movies", (err, delOK)=>{
//Si recibimos un error lo lanzamos como excepción
        if(err) throw err;
    //Imprimimos por consola el valor de delOk para saber si se ha borrado correctamente
        console.log(delOK);
    //cerramos la conexión
        db.close();
    })
})