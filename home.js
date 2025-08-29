document.getElementById("add_money").addEventListener("click",function(e){
    e.preventDefault()
    const validPin = 1234;
    const validNumber = 10000000000
    const bank  = document.getElementById("bank").value
    const account = document.getElementById("bank_account_number").value
    const addMoney = parseInt(document.getElementById("add_amount").value)
    const pinNumber = parseInt(document.getElementById("pin_number").value)
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