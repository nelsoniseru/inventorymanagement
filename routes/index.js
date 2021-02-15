var express = require('express');
var router = express.Router();
var homeController = require("../controller/viewsClass/viewsController")
let controller = new homeController()

/* GET home page. */

router.get('/', controller.HomeController);

module.exports = router;
