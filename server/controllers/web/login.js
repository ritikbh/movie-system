const logger = require("../../config/logger-config");
const UserLoginDetails = require('../../models/login')


exports.userVerification = async (req,res) => {

    var userMail = req.body.user_mail
    var userPassword = req.body.user_password
    try {
        const userDetails = await UserLoginDetails.findOne({user_email_id:userMail});

        if(userDetails != null)
        {
            if(userDetails.user_password == userPassword)
            {

                function generateSessionId(length) {
                    var id = "";
                    while (id.length < length) {
                        id += Math.random().toString(16).substring(2);
                    }
                    return id.substring(0,length);
                  }


                res.send({
                    message:{session_token:generateSessionId(32)}
                })
            }
            else{
                res.send({
                    error:'Incorrect password , try again'
                })
            }

        }
        else{
            res.send({
                error:'User not found'
            })
        }

    } catch (error) {
        logger.log("error", { message: error.message });
        res.status(500).json({message: error})
    }
}

