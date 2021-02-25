const Products = require("../../model/product/products")
const Cart = require("../../cart/cart")

var Allproducts = new Products()

class ViewsController {
    async HomeController(req, res) {
        let results = await Allproducts.getproducts()
        res.render("./home/index", { results })
    }
    RegisterController(req, res) {
        console.log(req.session.cart)
        res.render("./user/signup")
    }

    LoginController(req, res) {
       
        res.render("./user/login")
    }
 
    DashboardController(req, res) {
        res.render("./dashboard/dashboard")
    }

   async AddtocartController(req, res) {
        var carts = new  Cart(req.session.cart?req.session.cart:{})
        const id = req.params.getproductId
        const itemAmount = parseInt(req.query.item_amount)
        let product = await Allproducts.findProductById(id)
        carts.AddItem(product,itemAmount)
        req.session.cart = carts 
        req.flash("success",`item added to cart successfully`)
        res.redirect("/getproduct/"+product._id) 
    }

    async productDetailsController(req, res) {
        const id = req.params.getproduct;
        let product = await Allproducts.findProductById(id)
      res.render("./product/productdetails", {product})
    }

}


module.exports = ViewsController