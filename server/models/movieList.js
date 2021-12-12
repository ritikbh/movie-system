const mongoose = require('mongoose')

const movieListSchema = mongoose.Schema({

    movie_name:String,
    movie_genre:String,
    show_time:String,
    show_date:String,
    createdAt:{
        type: Date,
        default: new Date()
    }
})

const MovieList = mongoose.model('MovieList',movieListSchema)

module.exports = MovieList