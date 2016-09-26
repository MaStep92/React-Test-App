import mongoose from 'mongoose';

import './Movie';

import config from '../config.json';

const Movie = mongoose.model('Movie');

export function setUpConnection(){
    mongoose.createConnection(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listMovies(){
    mongoose.connect(`mongodb://${config.db.host}/movie`);
}


export function createMovie(data){
    const movie = new Movie({
        id: {type: String},
        name: {type: String},
        year: {type: Date},
        format: {type: String},
        actors: {type: String}
    });

    return movie.save();
}

export function deleteMovie(id){
    return movie.findById(id).remove();
}

