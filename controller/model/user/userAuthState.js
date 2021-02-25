let jwt = require("jsonwebtoken")
let findUser = require("./findUser")
let userId = new findUser()
function UserState() {
    this.requireAuth = requireAuth
    this.getAuthUserDetails = getAuthUserDetails
}

async function requireAuth(req, res, next) {

    try {
        const token = req.cookies.AuthUser;

        if (token) {
            next()
        } else {
            req.flash("errormsg", `You are not authorised`)
            res.redirect("/users/login")
        }
    } catch (err) {
        // err
        console.log(err)

        res.redirect("/users/login")
    }

}

async function getAuthUserDetails(req, res, next) {
    try {
        const token = req.cookies.AuthUser;
        var decoded = jwt.verify(token, process.env.JWT_SECRET);
        let user = await userId.fetchUserById(decoded.id)
        res.locals.user = user
        next()
    } catch (err) {
        res.locals.user = null
        next()

    }
}
module.exports = UserState