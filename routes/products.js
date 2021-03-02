var express = require('express');
var router = express.Router();
var viewsController = require("../controller/controller/viewsController/viewsController")
let controller = new viewsController()
var UserState = require("../controller/model/user/userAuthState")
var AuthState = new UserState()

/* GET home page. */

router.get('/add-to-cart/:getproductId', controller.AddtocartController);
router.get('/getproduct/:getproduct', controller.productDetailsController);
router.get('/cart-page', controller.cartController);
router.get('/cart-removeitem/:getcartproduct', controller.removeItemController);
router.get('/cart-addunit/:getcartproduct', controller.addUnitController);
router.get('/checkout-form',AuthState.requireAuth, controller.checkoutFormController);
router.post('/checkout', controller.checkoutController);
module.exports = router;
