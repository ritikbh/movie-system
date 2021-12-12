const MovieList = require('../../models/movieList')
const logger = require("../../config/logger-config");

exports.movieList = async (req,res) => {

    try {

        const movieList = await MovieList.find();
        
        if(movieList.length > 0)
        {
            res.send({
                data:movieList
            })
        }
        else{
            res.send({
                error:'No data found'
            })
        }
        
    } catch (error) {
        logger.log("error", { message: error.message });
        res.status(500).json({message: error}) 
    }
};