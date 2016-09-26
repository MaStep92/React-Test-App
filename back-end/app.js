import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import * as db from './DataBase.js';

db.setUpConnection();

const app = express();

app.use(cors({ origin: '*' }));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('Working!');
});

app.get('/movie', (req, res) => {
    db.listMovies().then(data => res.send(data));
});


app.post('/movie', (req, res) => {
    db.createMovie(req,body).then(data => res.send(data));
});


app.delete('/movie/:id', (req, res) => {
    db.deleteMovie(req.params.id).then(data => res.send(data));
});


const server = app.listen(8081, () => {
    console.log('server UP')
});