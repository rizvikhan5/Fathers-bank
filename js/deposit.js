
// stap-1
document.getElementById('btn-deposit').addEventListener('click',function(){

   // stap-2
 const depositFild = document.getElementById('deposit-id')
 const newDeposit = depositFild.value 
 const newDepositsAmount = parseFloat(newDeposit)

// stap-3
const depositTotalEliment = document.getElementById('deposit-total')
const totalDeposit = depositTotalEliment.innerText
const priviousDepositTotal = parseFloat(totalDeposit)
// stap-4
const currentDrposit =  priviousDepositTotal + newDepositsAmount
depositTotalEliment.innerText = currentDrposit

depositFild.value = '';

// stap-5

 const balanceTotalEliment = document.getElementById('balance-total')
 const totalBalance = balanceTotalEliment.innerText
 const priviousBalanceTotal = parseFloat(totalBalance)

 const currentBalance = priviousBalanceTotal + newDepositsAmount
 balanceTotalEliment.innerText = currentBalance




})

// atap-1
document.getElementById('btn-withdrow').addEventListener('click',function(){
 // console.log('clicked')

// stap-2
const withdrowFild = document.getElementById('withdrow-id')
const newWithdrow = withdrowFild.value
const newWithdrowAmount = parseFloat(newWithdrow)

// stap-3
const withdrowTotalEliment =document.getElementById('withdrow-total')
const totalWithdrow = withdrowTotalEliment.innerText
const priviousWithdrowTotal =parseFloat(totalWithdrow)

const currentWithdrow = priviousWithdrowTotal + newWithdrowAmount
withdrowTotalEliment.innerText = currentWithdrow



const balanceTotalEliment = document.getElementById('balance-total')
 const totalBalance = balanceTotalEliment.innerText
 const priviousBalanceTotal = parseFloat(totalBalance)

 const currentBalance = priviousBalanceTotal - newWithdrowAmount
 balanceTotalEliment.innerText = currentBalance




withdrowFild.value = '';
})








