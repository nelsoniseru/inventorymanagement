var AllProducts = require("../../models/products")

function Products(){
  this.getproducts = getproducts
}

async function getproducts(){
let results = await AllProducts.find({}) 
return results
}

module.exports = Products