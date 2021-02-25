let Users = require("../../../models/users")

function FindUser(){
    this.fetchUserByEmail = fetchUserByEmail
    this.fetchUserById = fetchUserById
}

async function fetchUserByEmail(email){
let result = Users.findOne({email})
return result
}

async function fetchUserById(id){
    let result = Users.findById({_id:id})
    return result
    }
module.exports = FindUser