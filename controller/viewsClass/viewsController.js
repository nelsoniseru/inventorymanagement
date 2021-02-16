const Products = require("../../controller/product/products")
var Allproducts = new Products()

class ViewsController {
    async HomeController(req, res) {
        let results = await Allproducts.getproducts()
        res.render("./home/index", { results })
    }
    RegisterController(req, res) {
        res.render("./user/signup",{   
            success: req.flash("success"),
            errormsg: req.flash("errormsg")
    })
    }

    LoginController(req, res) {
        res.render("./user/login",{
            success: req.flash("success"),
            errormsg: req.flash("errormsg")
        })
    }
}

module.exports = ViewsController