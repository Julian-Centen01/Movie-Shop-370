import mongoose from 'mongoose'

const MovieSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: 'id required'
    },
    title: {
        type: String,
        required: 'title required'
    },
    summmary: {
        type: String
    },
    genres: {
        type: [String],
        required: 'genre required'
    },
    rating: {
        type: String,
        required: 'rating is required'
    },
    languages: {
        type: [String],
        required: 'languages are required'
    },
    year: {
        type: String,
        required: 'year is required'
    },
    runtime: {
        type: Number,
        required: 'runtime is required'
    },
    score: {
        type: Number,
        required: 'score is required'
    },
    poster_url: {
        type: String,
        required: 'poster url is required'
    }




})

export default mongoose.model('movie', MovieSchema)