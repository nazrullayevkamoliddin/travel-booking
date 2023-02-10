const mongoose = require('mongoose');

const postModel =  new mongoose.Schema({
    title:{
        type: String,
        required: true,
        min:5,
        max:20
    },
    text:{
        type: String,
        required:true
    },
    image:{
        type: String,
        required:true
    }
})

module.exports = mongoose.model('Travel_Posts',  postModel);