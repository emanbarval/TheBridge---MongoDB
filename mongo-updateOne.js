/*Con este script vamos a actualizar documentos almacenados en nuestra base de datos*/
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
//Creamos un set que será el valor que sustituiremos en la base de datos
    const nuevoValor = {$set: {"nombre":"Francisco"}}
//Creamos la query que vamos a hacer para buscar el documento que se modificará
    const query = {"nombre":"Paco"};
//Utilizamos el método updateOne al que se le pasan tres argumentos
//por un lado la query para localizar el documento a modificar, el nuevo valor
// y por otro una callback con dos argumentos el error y un res
    dbo.collection("movies").updateOne(query, nuevoValor, (err, res)=>{
//Si recibimos un error lo lanzamos como excepción
        if(err) throw err;
//Utilizo el método find junto con toArray para mostrar todos los elementos de
//la colección de forma legible
        dbo.collection("movies").find({}).toArray((err, result)=>{
            //Imprimimos por pantalla un listado de documentos en la colección
            console.log(result);
        })
        db.close();
    })
        
})