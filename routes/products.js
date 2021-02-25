var express = require('express');
var router = express.Router();
var viewsController = require("../controller/controller/viewsController/viewsController")
let controller = new viewsController()

/* GET home page. */

router.get('/add-to-cart/:getproductId', controller.AddtocartController);
router.get('/getproduct/:getproduct', controller.productDetailsController);
module.exports = router;
