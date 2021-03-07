const Flutterwave = require('flutterwave-node-v3');
const argument = require("../../public/javascripts/argsfilter")
const open = require('open');
var unirest = require("unirest");
const dotenv = require('dotenv')
dotenv.config()
const flw = new Flutterwave(process.env.publicKey, process.env.secretKey);
class Checkout{
//     async ActivatingPayment(result,amount,...args){

// var cardNumber =args[0]["card_no"]
// var expdate = args[0].expdate
// var cvv = args[0].cvv

// cardNumber = argument.cardfilter(cardNumber)
// expdate = argument.expfilter(expdate)

//         const payload = {
//             "card_number": "5531886652142950",
//             "cvv": "564",
//             "expiry_month": "09",
//             "expiry_year": "21",
//             "currency": "NGN",
//             "amount": amount,
//             "redirect_url": "https://www.google.com",
//             "email": "nelsoniseru08@gmail.com",
//             "fullname": "Olufemi Obafunmiso",      
//             "phone_number": "0902620185",
//             "enckey": process.env.enckey,
//             "tx_ref": "new-transaction-ref", // This is a unique reference, unique to the particular transaction being carried out. It is generated when it is not provided by the merchant for every transaction.
//             "authorization":{
//                 "mode":"pin",
//                 "pin":"3310"
//             }
//         }
         
         
//         const chargeCard = async (res) => {
//             try {
//                 const response = await flw.Charge.card(payload)
//             console.log(response)
//                 if (response.meta.authorization.mode === 'pin') {
//                     let payload2 = payload
//                     payload2.authorization = {
//                         "mode": "pin",
//                         "fields": [
//                             "pin"
//                         ],
//                         "pin": 3310
//                     }
        
//                         const reCallCharge = await flw.Charge.card(payload2)

//                      const callValidate = await flw.Charge.validate({
//                          "otp": "12345",
//                          "flw_ref": reCallCharge.data.flw_ref
//                      })
//                     }
                
//                      //5531-8866-5214-2950
                     
//                 if (response.meta.authorization.mode === 'otp') {
//                     unirest.post('https://api.flutterwave.com/v3/payments')
//                     .headers({'Content-Type': 'application/json', 'Authorization':process.env.secretKey})
//                     .send(payload)
//                     .end(function (response) {
//                         console.log(response.body)
//                         open(response.body.data.link)
//                     });
                
//                 }
         
       
          
         
//             } catch (error) {
//                 console.log(error)
//            }
//        }
         
//         chargeCard()

//      }
}

module.exports = Checkout