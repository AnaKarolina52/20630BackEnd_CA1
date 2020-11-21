const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({

    title:{
        type: String,
        required: true,
    },

    author:{
        type: String,
        required: true,
    },

    price:{
        type: Number,
        require: true,
    },
    available:{
        type: Boolean,
        required: true,
    },
    copies:{
        type: Number,
        required:true,
    }
});

module.exports = mongoose.model('Book', BookSchema); 