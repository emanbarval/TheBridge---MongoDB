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
    //Creamos la query que vamos a hacer para buscar el documento que se borrará
    const query = {"nombre":"Paco"};
    //lanzamos el método deleteOne sobre la colección movies con dos argumentos.
    //El primero es una query que si la pasamos vacía borrará el documento de la
    //colección. Si le pasamos una query borrará el primer elemento que coincida
    //con el criterio de busqueda que le hemos pasado.
    //El segundo parámetro es la función callback
    dbo.collection("movies").deleteOne(query, (err, obj)=>{
        //Utilizo el método find junto con toArray para mostrar todos los elementos de
        //la colección de forma legible
        console.log(obj.deletedCount);
        dbo.collection("movies").find({}).toArray((err, res)=>{
        //Imprimimos por pantalla un listado de documentos en la colección
        console.log(res);})
    });
    //Cerramos la conexión
        db.close();
})