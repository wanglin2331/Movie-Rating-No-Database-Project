const express = require('express');
const bodyParser = require('body-parser')

const app=express();
app.use(bodyParser.json());

const localUrl='/api/movies';

const port=3001;
const movieController = require('./controllers/movie_controller');
//app.use(express.static( __dirname + '/../public'));

app.post(localUrl,movieController.create);
app.get(localUrl,movieController.read);
app.put(localUrl+"/:id", movieController.update);
app.delete(localUrl+"/:id", movieController.delete);


app.listen(port,()=>
console.log('Server is listening on ',port));