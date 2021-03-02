const Products = require("../../model/product/products")
const Cart = require("../../cart/cart")
const Checkout = require("../../checkout/checkout")
var Allproducts = new Products()

class ViewsController {
    async HomeController(req, res) {
        let results = await Allproducts.getproducts()
        res.render("./home/index", { results })
    }
    RegisterController(req, res) {
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

    
    async cartController(req, res) {
         try{
           
            var carts = new  Cart(req.session.cart?req.session.cart:{})
       let items = carts.getItem()
      
      res.render("./product/cartproduct",{items})
         }catch(e){
             console.log(e)
         }
    }
    async removeItemController(req,res){
        const id = req.params.getcartproduct;
        var carts = new Cart(req.session.cart?req.session.cart:{})
       let items = carts.removeItem(id)
        req.session.cart.totalQty = items[1]
        req.session.cart.totalPrice = items[0]
        req.flash("success",`item removed to cart successfully`)
        res.redirect("/cart-page") 
    }

    addUnitController(req,res){
    //    let unit = req.query.unit
    //    const id = req.params.getcartproduct;
    //    var carts = new  Cart(req.session.cart?req.session.cart:{})
    //    let items = carts.addUnit(id,unit)
    //    req.session.cart.totalPrice = items[2]
    //    req.session.cart.totalQty = items[1]
    //    req.session.cart.items[id].subTotal = items[0]
    //    res.redirect("/cart-page") 
    }

    checkoutFormController(req,res){
        var carts = new  Cart(req.session.cart?req.session.cart:{})
        let items = carts.getItem()
        res.render("./product/checkoutform",{items}) 
     }

     checkoutController(req,res){
         var check = new Checkout()
         let totalAmount =req.session.cart.totalPrice
         
         check.ActivatingPayment(totalAmount,req.body)
     }
}


module.exports = ViewsController