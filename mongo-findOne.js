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
    //lanzamos el método findOne sobre la colección movies con dos argumentos.
    //El primero es una query que como la pasamos vacía nos va a devolver 
    //el primer documento de la colección. Si le pasamos una query nos devolverá
    //el primer elemento que cumpla dicho criterio.
    //El segundo parámetro es la función callback
    dbo.collection("movies").find({},(err, result)=>{
        //Si recibimos un error lo lanzamos como excepción
        if(err) throw err;
        //imprimimos en consola el valor del resultado de la búsqueda
        console.log(result);
        //cerramos la base de datos
        db.close();
    })
})