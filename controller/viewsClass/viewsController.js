let products = require("../../controller/product/products")
const Products = require("../../controller/product/products")
var Allproducts =  new Products()

class ViewsController{
async HomeController(req,res){
    let results = await Allproducts.getproducts()
    res.render("./home/index",{results})
}

}

module.exports = ViewsController