function cardfilter(card){
    let cardNo = card.replace(/\-/g, "");
    return cardNo
}

function expfilter(expdate){
    let resultTextState = expdate.replace(/\//g, " ");
    let exp = resultTextState.split(" ");
    return exp
}


module.exports = {cardfilter,expfilter}