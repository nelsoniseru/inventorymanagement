var express = require('express');
var router = express.Router();
var viewsController = require("../controller/controller/viewsController/viewsController")
var UserState = require("../controller/model/user/userAuthState")
let controller = new viewsController()
var AuthState = new UserState()

router.get('/profile',AuthState.requireAuth,controller.DashboardController);

module.exports = router;
