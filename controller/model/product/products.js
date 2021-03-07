var AllProducts = require("../../../models/products")

function Products(){
  this.getproducts = getproducts
  this.findProductById = findProductById
}

async function getproducts(){
let results = await AllProducts.find({}) 
return results
}


 async function findProductById(id){
   let results = await AllProducts.findById({_id:id})
   return results
 }
module.exports = Products