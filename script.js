document.getElementById('login').addEventListener('click',(e)=>{
    e.preventDefault()
    const mobileNumberDataBase = 8801758413983;
    const pinNumberDataBase = 1234
    const mobileNumber = document.getElementById('mobileNumber').value
    const pinNumber = document.getElementById('pinNumber').value
    const convertedMobileNumber = parseInt(mobileNumber)
    const convertedPinNumber = parseInt(pinNumber)

    if( mobileNumberDataBase === convertedMobileNumber && pinNumberDataBase === convertedPinNumber){
        window.location.href = './home.html'
    }else{
        alert("wrong cradintails")
    }
})