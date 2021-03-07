
class UserLogout{

async Logout(req,res){
 
    res.cookie('AuthUser', '', { maxAge: 1 });
    res.redirect('/users/login')

}

}
module.exports = UserLogout