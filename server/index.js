const express = require('express')
const app = express()
const mongoose = require('mongoose')
require("dotenv/config"); // ENV Connection
const cors = require("cors");
const logger = require("./config/logger-config");
const web = require('./routes/web')


app.use(express.json());
app.use(cors())
const PORT = process.env.PORT


app.use('/web',web)



app.get('/',(req,res) => {res.send('Node Server running')})

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => {
        app.listen(PORT,console.log(`listening on ${PORT}`))
    })
    .catch((error) => {
        logger.log("error", { message: error.message });
    })


