const dotenv = require('dotenv')
dotenv.config({})
const mongoClient = require('mongoose');


mongoClient.connect(process.env.LOCAL,{useNewUrlParser: true, useUnifiedTopology: true })
mongoClient.connection.on("connected",function(){
console.log("db is connected");
});