

class Cart{
    constructor(cart) {
        this.items = cart.items ? cart.items:{} ;
        this.totalPrice = cart.totalPrice || 0
        this.totalQty = cart.totalQty || 0
      }
    
    async AddItem(product,unit){ 
       if( this.items[product._id]) {
        this.items[product._id].purchaseQty = this.items[product._id].purchaseQty + unit
        this.totalPrice += this.items[product._id].product.price * unit
      }else{
        this.items[product._id] = {product,purchaseQty:unit}
        this.totalPrice += this.items[product._id].product.price * this.items[product._id].purchaseQty
       }
       this.totalQty += unit
          
       
     } 

    GetItem(){ 
  
        return this.items
     } 
}

module.exports = Cart