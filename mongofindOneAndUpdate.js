/*Con este script vamos a buscar y actualizar un documento almacenados en nuestra
 base de datos*/
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
//Creamos la query que vamos a hacer para buscar los documentos que se modificarán
    const query = {"nombre":"Paco"};
    //lanzamos el método findOneAndUpdate sobre la colección movies con tres
    //argumentos que son: La query para localizar al elemento que devuelve el
    //primer elemento que coincida con la búsqueda o si está vacía el primer
    //elemento de la colección. 
    //El segundo es el set con los pares clave valor que cambiarán los valores
    //actuales. Y por último Upsert que si está a true permite que si no se
    //encuentra un elemento se pueda insertar uno nuevo al final
  dbo.collection("movies").findOneAndUpdate({query},{nuevoValor},{upsert: true})
  //Cerramos la base de datos      
  db.close();
        
})