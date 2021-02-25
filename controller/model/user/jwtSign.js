let jwt = require("jsonwebtoken")
function jwtSign(id){
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
    const cookieOption = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }
    return [token,cookieOption]
}

module.exports.jwtSign = jwtSign