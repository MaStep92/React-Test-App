import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    id: {type: String},
    name: {type: String},
    year: {type: Date},
    format: {type: String},
    actors: {type: String}
});


mongoose.model('Movie', MovieSchema);