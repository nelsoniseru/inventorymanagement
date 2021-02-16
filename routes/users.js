var express = require('express');
var router = express.Router();
var {check, validation} = require("../controller/validation/validation")
var viewsController = require("../controller/viewsClass/viewsController")
var logController = require("../controller/authClass/loginUser")
var regController = require("../controller/authClass/registerUser")

var Viewscontroller = new viewsController()
var Logcontroller = new logController()
var Regcontroller = new regController()


router.get("/signup",Viewscontroller.RegisterController)
router.get("/login",Viewscontroller.LoginController)
router.post("/login",Logcontroller.Login)
router.post("/signup",Regcontroller.Register)

module.exports = router;
