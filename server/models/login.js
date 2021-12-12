const mongoose = require('mongoose')

const userLoginDetailsSchema = mongoose.Schema({
    user_unique_id: String,
    user_email_id: String,
    user_password: String,
    createdAt:{
        type: Date,
        default: new Date()
    }
})

const UserLoginDetails = mongoose.model('UserLoginDetails',userLoginDetailsSchema)

module.exports = UserLoginDetails