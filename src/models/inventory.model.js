import mongoose from 'mongoose'

const InventorySchema = new mongoose.Schema({
    movie_id: {
        type: Number,
        required: 'movie id required',
        movie_db: {type: mongoose.Schema.ObjectId, ref: 'movies'}
    },
    price: {
        type: Number,
        required: 'price required'
    },
    quantity: {
        type: Number,
        required: 'quantity required'
    }



})

export default mongoose.model('inventory', InventorySchema)