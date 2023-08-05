// const bodyParser = require("body-parser");
const express = require("express");

const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
let tasks = [];

const server = express();
// to enable parsing of json bodies for post requests
server.use(express.json());

// TODO: your code to handle requests
server.get('/', function(req, res){ //Ruta para un GET a /
    res.status(200).send('Hola mundo!'); // response "Hola mundo!" en la pagina principal
});
server.get('/json', function(req, res){
    var obj = {
      saludo: 'Hola mundo!'
    }
    res.json( obj );
});

server.get('/body/', function(req, res){
    var obj = {
     saludo: 'Hola ' + req.body.name,
   }
   res.json( obj );
 });

server.get('/query/', function(req, res){
    var obj = {
     saludo: 'Hola ' + req.query.name,
   }
   res.json( obj );
 });

server.post('/tasks', (req, res) => {
    const {title, contents, date} = req.body 
    if (!title || !contents || !date) {
        let errorMsg = {
            error: 'No se recibieron los parámetros necesarios para cerar el Post'
        }
        res.json(errorMsg)
    }
    let Task = {
        id,
        title,
        contents,
        date
    }
    tasks.push(Task)
    res.send(Task)
})

module.exports = { tasks, server };

// {
//     "id": "1",
//     "title": "Sacar la basura",
//     "contents": "Hay basura en el patio, en la cocina y en el fondo",
//     "date": "05/08/2023"
//   }

// http://localhost:3000/posts