const express = require("express");
const Router = express.Router();
const loginController = require('../controllers/web/login')
const dashboardController = require('../controllers/web/dashboard')

Router.post('/user-login',(req,res) => { loginController.userVerification(req,res) })

Router.post('/fetch-movie-list',(req,res) => { dashboardController.movieList(req,res) })



module.exports = Router;
