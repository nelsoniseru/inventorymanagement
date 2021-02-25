var express = require('express');
var router = express.Router();
var {check, validation} = require("../controller/validation/validation")
var viewsController = require("../controller/controller/viewsController/viewsController")
var logController = require("../controller/controller/authController/loginUser")
var regController = require("../controller/controller/authController/registerUser")
var Userlogout = require("../controller/controller/authController/logout")

var Viewscontroller = new viewsController()
var Logcontroller = new logController()
var Regcontroller = new regController()
var UserLogout = new Userlogout()

router.get("/signup",Viewscontroller.RegisterController)
router.get("/login",Viewscontroller.LoginController)
router.get("/logout",UserLogout.Logout)
router.post("/login",Logcontroller.Login)
router.post("/signup",Regcontroller.Register)

module.exports = router;
