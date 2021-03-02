

class Cart{
    constructor(cart) {
        this.items = cart.items ? cart.items:{} ;
        this.totalPrice = cart.totalPrice || 0
        this.totalQty = cart.totalQty || 0
      
       
      }
    
    async AddItem(product,unit){ 
       if( this.items[product._id]) {
        this.items[product._id].purchaseQty = this.items[product._id].purchaseQty + unit 
        this.items[product._id].subTotal += this.items[product._id].product.price * unit
      }else{  
        let subTotal = product.price * unit
        this.items[product._id] = {product,purchaseQty:unit,subTotal:subTotal}
       }
       this.totalPrice += this.items[product._id].product.price * unit
       this.totalQty += unit
     
     } 

    getItem(){ 
      var arr = [];
      for(var id in this.items){
          arr.push(this.items[id])
      }
      return arr
     } 

  removeItem(id){

    if( this.items[id]) {
      this.totalPrice = this.totalPrice - this.items[id].subTotal  
      this.totalQty = this.totalQty  - this.items[id].purchaseQty 
      delete this.items[id] 
      return [this.totalPrice,this.totalQty]
   
    }
    
  }

  addUnit(id,unit){
    // if( this.items[id]) {
    //   var unit
    //   if (this.totalQty > parseInt(unit)){
    //      unit = this.totalQty - parseInt(unit)
    //     this.totalQty += unit
    //   }else{
    //      unit =  parseInt(unit) - this.totalQty 
    //      this.totalQty += unit
    //   }
      
      
    //   this.items[id].purchaseQty =  parseInt(unit)
    //     var newSubTotal = this.items[id].product.price * this.items[id].purchaseQty
    //   this.items[id].subTotal = newSubTotal
 
    //   this.totalPrice += newSubTotal - this.items[id].subTotal 
    //   }
    //   return [this.items[id].subTotal,this.totalQty,this.totalPrice]

    // }
    
  }
}

module.exports = Cart