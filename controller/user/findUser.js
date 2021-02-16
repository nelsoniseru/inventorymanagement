let Users = require("../../models/users")

function FindUser(){
    this.fetchUserByEmail = fetchUserByEmail
}

async function fetchUserByEmail(email){
let result = Users.findOne({email})
return result
}

module.exports = FindUser