var mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone_number:{
        type:String
    },
    address:{
        type:String
    },
    country:{
        type:String
    },
    state:{
        type:String
    },
    password:{
        type:String
    },
    created: {
        type: Date,
        default: Date.now
    }
})

let User = mongoose.model("User",userSchema)
module.exports = User