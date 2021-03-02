const Flutterwave = require('flutterwave-node-v3');
const argument = require("../../public/javascripts/argsfilter")
const open = require('open');
const dotenv = require('dotenv')
dotenv.config()
const flw = new Flutterwave(process.env.publicKey, process.env.secretKey);
class Checkout{
    async ActivatingPayment(amount,...args){
var cardNumber =args[0]["card_no"]
var expdate = args[0].expdate
var cvv = args[0].cvv
var name =  args[0].name

cardNumber = argument.cardfilter(cardNumber)
expdate = argument.expfilter(expdate)

        const payload = {
            "card_number": cardNumber,
            "cvv":cvv,
            "expiry_month": expdate[0],
            "expiry_year": expdate[1],
            "currency": "NGN",
            "amount": amount,
            "redirect_url": "https://www.google.com",
            "fullname":name,
            "email": "olufemi@flw.com",
            "phone_number": "09026915561",
            "enckey": process.env.encKey,
            "tx_ref": "MC-32444ee--4eerye4euee3rerds4423e43e" // This is a unique reference, unique to the particular transaction being carried out. It is generated when it is not provided by the merchant for every transaction.
         
        }
         
         
        const chargeCard = async () => {
            try {
                const response = await flw.Charge.card(payload)
                console.log(response)
                if (response.meta.authorization.mode === 'pin') {
                    let payload2 = payload
                    payload2.authorization = {
                        "mode": "pin",
                        "fields": [
                            "pin"
                        ],
                        "pin": 3310
                    }
                    const reCallCharge = await flw.Charge.card(payload2)
         
                    const callValidate = await flw.Charge.validate({
                        "otp": "12345",
                        "flw_ref": reCallCharge.data.flw_ref
                    })
                    console.log(callValidate)
         
                }
                if (response.meta.authorization.mode === 'redirect') {
         
                    var url = response.meta.authorization.redirect
                    open(url)
                }
         
                console.log(response)
         
         
            } catch (error) {
                console.log(error)
            }
        }
         
        chargeCard()

     }
}

module.exports = Checkout