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
    //Creamos una constante orden que al pasarla a sort le dirá si el orden es
    // ascendente (1) o descendente (-1)
    const orden = { _id: -1};
    //lanzamos el método find sobre la colección movies con un único argumento 
    //que en este caso es una query vacia que nos devuelve todos los elementos
    //de la colección. A la salida de ese método le pasamos el método sort con
    //un criterio de ordenamiento (Ascendente o Descendente) y a la salida de 
    //este método se le pasa al método to array para hacerla algo más legible.
    //toArray tienen una la función callback
    dbo.collection("movies").find({}).sort(orden).toArray((err, result)=>{//findOne({}, (err, result)=>{
        //Si recibimos un error lo lanzamos como excepción
        if(err) throw err;
        //imprimimos result en la consola
        console.log(result);
        //cerramos la base de datos
        db.close();
    })
})