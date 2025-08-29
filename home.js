function getInputValue (id){
    const totalValue = parseInt(document.getElementById(id).value)
    return totalValue
}
function getTextValue (id){
    const totalTextValue = document.getElementById(id)
    return totalTextValue
}
function getAvableBalance(value){
    document.getElementById("avableBalance").innerText = value
}

document.getElementById("add_money").addEventListener("click",function(e){
    e.preventDefault()
    const validPin = 1234;
    const bank  = getTextValue("bank")
    const account = getTextValue("bank_account_number")
    const addMoney =getInputValue("add_amount")
    const pinNumber = getInputValue("pin_number")
    const avableBalance = parseInt(document.getElementById("avableBalance").innerText)

    if( account.length < 11){
        alert("Provider a valid account number")
        return
    }
    if( pinNumber !== validPin){
        alert("Provider a currect pin number")
        return
    }

    const totalBalance = addMoney + avableBalance
    getAvableBalance(totalBalance)
})
document.getElementById("cashout_add_money").addEventListener("click",function(e){
    e.preventDefault()
    const validPin = 1234;

    const account = getTextValue("cashout_add_amount")
    const addMoney =getInputValue("cashout_add_amount")
    const pinNumber = getInputValue("cashout_pin_number")

    const avableBalance = parseInt(document.getElementById("avableBalance").innerText)

    if( account.length < 11){
        alert("Provider a valid account number")
        return
    }
    if( pinNumber !== validPin){
        alert("Provider a currect pin number")
        return
    }

    const totalBalance = avableBalance - addMoney
    getAvableBalance(totalBalance)
})

function getToguleMenu (id){
   const forms = document.getElementsByClassName("form")
   for(const item of forms ) {
    item.style.display = 'none'
   }
   document.getElementById(id).style.display = "block"
}

document.getElementById("add_money_button").addEventListener("click",()=>{
    getToguleMenu("add_money_parents")
})
document.getElementById("cashOut_button").addEventListener("click",()=>{
    getToguleMenu("chachOut_parents")
})
document.getElementById("transfer_Money_button").addEventListener("click",()=>{
    getToguleMenu("transfer_Money_parents")
})
document.getElementById("get_Bonus_button").addEventListener("click",()=>{
    getToguleMenu("get_Bonus_parents")
})
document.getElementById("pay_Bill_button").addEventListener("click",()=>{
    getToguleMenu("pay_Bill_parents")
})
document.getElementById("transactions_button").addEventListener("click",()=>{
    getToguleMenu("transactions_parents")
})