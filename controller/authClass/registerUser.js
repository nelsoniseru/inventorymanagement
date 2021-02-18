let CreateUser = require("../../models/users")
let bcrypt = require("bcryptjs")
let findUser = require("../user/findUser")
let existingUser = new findUser()

class UserReg{

async Register(req,res){
 
const {name,email,phone_number,password} = req.body
let result = await existingUser.fetchUserByEmail(email)
let salt = await bcrypt.genSalt(10)
let hash = await bcrypt.hashSync(password, salt)


switch(true){
    case result == null:
       await CreateUser.create({
           name:name,
           email:email,
           phone_number:phone_number,
           password:hash
       })
req.flash("success",`Your registration is successful`)
res.redirect("/users/login")
        break;
      default:
        // code block
}

}

}
module.exports = UserReg