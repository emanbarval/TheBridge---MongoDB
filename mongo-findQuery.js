/*Con este script vamos a leer documentos almacenados en nuestra base de datos*/
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
    //Hacemos una constante query que en este caso es un par clave-valor
    //que contiene una expresión regular pero podría ser cualquier tipo de dato
    const query = {"nombre":/^Rocky/}
    //lanzamos el método find sobre la colección movies con un único argumento 
    //que es una query que nos devolverá todos los elementos que coincidan
    //con ella. Si le pasamos una query vacía nos devolverá el listado completo
    //la salida de este método se le pasa al método to array para hacerla algo
    //más legible. toArray tienen una la función callback
    dbo.collection("movies").find({query}).toArray((err, result)=>{
        //Si recibimos un error lo lanzamos como excepción
        if(err) throw err;
        //Imprimimos por consola el resultado
        console.log(result);
        //cerramos la base de datos
        db.close();
    })
})