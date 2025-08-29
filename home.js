function getInputValue (id){
    const totalValue = parseInt(document.getElementById(id).value)
    return totalValue
}
function getTextValue (id){
    const totalTextValue = document.getElementById(id)
    return totalTextValue
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
    document.getElementById("avableBalance").innerText = totalBalance
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
    document.getElementById("avableBalance").innerText = totalBalance
})


document.getElementById("add_money_button").addEventListener("click",()=>{
    document.getElementById("add_money_parents").style.display = "block"
    document.getElementById("chachOut_parents").style.display = "none"
})
document.getElementById("cashOut_button").addEventListener("click",()=>{
    document.getElementById("add_money_parents").style.display = "none"
    document.getElementById("chachOut_parents").style.display = "block"
})