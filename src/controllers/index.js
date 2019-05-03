const express = require("express");
const signup = require("./signup");
//import {get} as getLogin from "./userControllers/login" ;
const {get: getLogin} = require('./userControllers/login')
const {serverError,clientError} = require('./error');
const userControllers = require("./userControllers")

const router = express.Router();

//no need for auth
router.get("/signup", signup.get);
router.post("/signup", signup.post);
router.get("/", getLogin);
//need auth middleware
router.use(userControllers);//user middleware

router.use(clientError);
router.use(serverError);


module.exports = router;
