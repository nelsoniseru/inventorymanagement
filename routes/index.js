var express = require('express');
var router = express.Router();
var viewsController = require("../controller/viewsClass/viewsController")
let controller = new viewsController()

/* GET home page. */

router.get('/', controller.HomeController);

module.exports = router;
