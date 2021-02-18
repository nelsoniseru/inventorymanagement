
let findUser = require("../user/findUser")
var bcrypt = require('bcryptjs');
let userjwt = require("../user/userJwt")
let existingUser = new findUser()
class UserLog{

async Login(req,res){
try{
const{email,password} = req.body
let emailExist = await existingUser.fetchUserByEmail(email)
let passwordCheck = await bcrypt.compareSync(password, emailExist.password); 
if(!emailExist || !passwordCheck){
    req.flash("errormsg",`invalid email/password`)
    res.redirect("/users/login")
}else{
    let jwt =userjwt.userJwt(emailExist._id)
    res.cookie('AuthUser', jwt[0], jwt[1])
    res.redirect("/")
}
}catch(e){
    req.flash("errormsg",`invalid email/password`) 
    res.redirect("/users/login")
}

}
    
}

module.exports = UserLog