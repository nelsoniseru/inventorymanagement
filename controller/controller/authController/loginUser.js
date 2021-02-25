
let findUser = require("../../model/user/findUser")
var bcrypt = require('bcryptjs');
let userjwt = require("../../model/user/jwtSign")
let existingUser = new findUser()
class UserLog{

async Login(req,res){
try{
const{email,password} = req.body
let emailExist = await existingUser.fetchUserByEmail(email)
let passwordCheck = await bcrypt.compareSync(password, emailExist.password); 
if(email =="" || password ==""){
    req.flash("errormsg",`fields required`)
    res.redirect("/users/login") 
   
}else if(!emailExist || !passwordCheck){
    req.flash("errormsg",`invalid email/password`)
    res.redirect("/users/login")
}
else{
    let jwt = userjwt.jwtSign(emailExist._id)
    res.cookie('AuthUser', jwt[0], jwt[1])
    res.redirect("/profile")
}
}catch(e){
    console.log(e)
    req.flash("errormsg",`invalid email/password`) 
    res.redirect("/users/login")
}

}
    
}

module.exports = UserLog