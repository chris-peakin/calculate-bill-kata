function calculateBill(price, vat, tip){
    const bill = price + (price*(vat/100)) + tip;
    const stringBill = bill.toString();
    if ((typeof price) !== "number"){
        return("error");
    }
    if ((typeof vat) !== "number"){
        return("error");
    }
    if ((typeof tip) !== "number"){
        return("error");
    }
    return('£'+stringBill);
}

module.exports = calculateBill;