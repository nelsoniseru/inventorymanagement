

class Cart{
    constructor(cart) {
        this.items = cart.items ? cart.items:{} ;
        this.purchaseQty = 0
        
      }
    
    async AddItem(product,unit){ 
      let store = this.items[product._id]
     
        this.items[product._id] = {product,purchaseQty:unit}
     

       
     } 

    GetItem(){ 
  
        return this.items
     } 
}

module.exports = Cart