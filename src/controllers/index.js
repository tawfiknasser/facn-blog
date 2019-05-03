const express = require("express");
const signup = require("./signup");
const login = require('./login')
const {serverError,clientError} = require('./error');
const userControllers = require("./userControllers")

const router = express.Router();

//no need for auth
router.get("/signup", signup.get);
router.post("/signup", signup.post);
router.post("/login", login.post);
router.get("/login", login.get);

//need auth middleware
router.use(userControllers);//user middleware

//router.use(clientError);  No need cause all routes serve home
router.use(serverError);


module.exports = router;
