import mongoose from 'mongoose'

const cart_itemsSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: 'id required'
    },
    session_id: {
        type:Number,
        required: 'session_id required'
    },
    movie_id: {
        type: Number,
        required: 'movie_id required',
        movie_db: {type: mongoose.Schema.ObjectId, ref: 'movies'}
    },
    quantity: {
        type: Number,
        required: 'quantity required'
    }




})

export default mongoose.model('cart_items', cart_itemsSchema)