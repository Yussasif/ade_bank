///////////IMPORTING ELEMENT FROM HTML//////////////
//////////////////LOGIN/////////////////
const loginForm = document.querySelector('.login-form')
const inputAccNumber = document.querySelector('#acc-Number')
const inputPin = document.querySelector('#pin')
const loginBtn = document.querySelector('#login-btn')
const gotoSignUpBtn = document.querySelector('#goto-sign-up')
///POP UP///
let popUPMessage = document.querySelector('.popup-message')
const popUp = document.querySelector('.pop-up')
const cancelBtn = document.querySelector('.cancel')
const okBtn  = document.querySelector('.ok')
const overlay = document.querySelector('.blur')
///NAV///
const links = document.querySelector('.links')
const pages = document.querySelectorAll('.page')
const linkBtn = document.querySelectorAll('.link')
const navBar = document.querySelector('.navbar')
///HOME///
const home = document.querySelector('#home')
const greetMessage = document.querySelector('.greet-message')
const accountBalance = document.querySelector('.balance-amount')
const transferBtn = document.querySelector('#transfer-btn')
const loanBtn = document.querySelector('#loan-btn')
const withdrawBtn = document.querySelector('#withdraw-btn')
const recentHistory =  document.querySelector('.recent-history')
const transactionHisBtn = document.querySelector('#transaction-history-btn')
///REWARD///
const getRewardBtn = document.querySelector('.claim-btn-cont')
///INVEST///
///CARDS///
///TRANSACTION HISTORY///
const historyPage = document.querySelector('.transaction-history-page')
const transactionHistory = document.querySelector('.transaction-history')
const backHome = document.querySelector('.back')

///////////////////FUNCTIONS///////////////////
//Capitalize Text//
const capitalize = (text) => text.charAt(0).toUpperCase().concat(text.slice(1).toLowerCase());


////display greet message///
const greet = function (account){
    const {firstName} = account
    const newFirstName = capitalize(firstName)
    greetMessage.textContent = `Hello!, ${newFirstName}`
    return greetMessage
}

//////////////////DISPLAYING EACH TRANSACTIONs//////////////////
const getTransactionHistory = function(account){
    recentHistory.textContent = transactionHistory.textContent = ''

    account.transactions.forEach(function(transaction) {
    const {transactionFirstName, transactionLastName, transactionDate, transactionAmount, transactionTime} = transaction
        const markup = `
        <div class="transactions ${transaction.getTransactionType()}-transaction">
        <div class="trans-type-cont">
        <img src="./img/logo.png" alt="Transaction type" class="transaction-type" width="20px" height="20px">
        </div>
        <div class="transaction-to-fro">
        <p class="trans-name">${capitalize(transactionFirstName)} ${capitalize(transactionLastName)}</p> 
        <p class="trans-time"> ${transactionTime}PM
        <span class='trans-date'> ${transactionDate}</span></p>
        </div>
        
        <div class="transaction-amount">
        <p>${transactionAmount}</p>
        </div>
        </div>
        `
recentHistory.insertAdjacentHTML("afterbegin", markup)
transactionHistory.insertAdjacentHTML('afterbegin', markup)
})}

//////////CACULATE BALANCE//////////////
const calcBalance = function(account) {
    const calcBalance = account.transactions.reduce((accumulator, transaction) => transaction.transactionAmount + accumulator ,0)
 return accountBalance.textContent = `$${calcBalance}`
}

///////////////POP UP///////////////
///OPEN POP UP///
const openPopUp = function (){
    popUp.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
///CLOSE POPUP///
const closePupUp = function (){
    popUp.classList.add('hidden')
    overlay.classList.add('hidden')
}
///ADDING EVENT LISTENER TO CLOSE POP UP BUTTONS
const closePopUpbBtns = [overlay, cancelBtn, okBtn]
closePopUpbBtns.forEach(btn => btn.addEventListener('click', closePupUp))

////////PENDING FUNCTIONALITIES WARNING ON CLICK////////
const pendings = [ transferBtn, loanBtn, withdrawBtn, getRewardBtn]
pendings.forEach((pending) => pending.addEventListener('click', function(){
    openPopUp()
    popUPMessage.textContent = 'This functionality has not yet been implemented. Check back later'
}))

//////////////NAVIGATE PAGES///////////////
links.addEventListener('click', function(e){
    e.preventDefault();
    const link = e.target
   
    if(!link.classList.contains('link'))return

    historyPage.classList.add('hidden')

    linkBtn.forEach(btn => btn === e.target ? btn.closest('.link-item').classList.add('active'): btn.closest('.link-item').classList.remove('active'));
  
    pages.forEach(page => page.dataset.tag === e.target.closest('.link-item').dataset.tag ? page.classList.remove('hidden') : page.classList.add('hidden'))

})

//////////////ACCOUNTS/////////////////////
const acc1 = {
    firstName: 'yusuf',
    lastName: 'owoade',
    pin: 1111,
    email: 'owoadeadetunji1@gmail.com',
    accountNo: 7018937378,
    phoneNumber: '07018937378',
    transactions: [{
        transactionFirstName : 'majek',
        transactionLastName: 'Potfolio',
        transactionDate : 'Today',
        transactionAmount : -320,
        transactionTime : '08 : 00',
        getTransactionType (){
           return  this.transactionAmount > 0 ? 'credit' : 'debit' 
        } 
    },
    {
        transactionFirstName : 'ogundabeje',
        transactionLastName: 'oloriole',
        transactionDate : 'Yesterday',
        transactionAmount : 520,
        transactionTime : '12 : 10',
        getTransactionType (){
            return  this.transactionAmount > 0 ? 'credit' : 'debit' 
        } 
    },
    {
        transactionFirstName : 'aderemi',
        transactionLastName: 'fajemilehin',
        transactionDate : '5days ago',
        transactionAmount : -430,
        transactionTime : '05 : 50',
        getTransactionType (){
           return  this.transactionAmount > 0 ? 'credit' : 'debit' 
        } 
    },
    {
        transactionFirstName : 'alokolohunkigbe',
        transactionLastName: 'fransis',
        transactionDate : '10/02/2023',
        transactionAmount : 5000,
        transactionTime : '03 : 23',
        getTransactionType (){
            return  this.transactionAmount > 0 ? 'credit' : 'debit' 
        } 
    },
    {
        transactionFirstName : 'adigun',
        transactionLastName: 'ogaoga',
        transactionDate : '12/03/2023',
        transactionAmount : -420,
        transactionTime : '07 : 00',
        getTransactionType (){
            return  this.transactionAmount > 0 ? 'credit' : 'debit' 
        } 
    },
    {
        transactionFirstName : 'felix',
        transactionLastName: 'idiaba',
        transactionDate : '20/03/2023',
        transactionAmount : 420,
        transactionTime : '07 : 00',
        getTransactionType (){
            return  this.transactionAmount > 0 ? 'credit' : 'debit' 
        } 
    }
    
]
}
const acc2 = {
    firstName: 'adewale',
    lastName: 'owoade',
    pin: 2222,
    email: 'detaffiliate@gmail.com',
    accountNo: 8130152653,
    phoneNumber: '08130152653',
    transactions: [{
        transactionFirstName : 'OLAWALE',
        transactionLastName: 'ADIO',
        transactionDate : '10/12/2022',
        transactionAmount : 5020,
        transactionTime : '10 : 05',
        getTransactionType (){
           return  this.transactionAmount > 0 ? 'credit' : 'debit' 
        } 
    },
    {
        transactionFirstName : 'OLUSANYA',
        transactionLastName: 'ARIBIDESI',
        transactionDate : '14/11/2021',
        transactionAmount : 500,
        transactionTime : '12 : 10',
        getTransactionType (){
            return  this.transactionAmount > 0 ? 'credit' : 'debit' 
        } 
    },
    {
        transactionFirstName : 'ADEBOMI',
        transactionLastName: 'IRUMOLE',
        transactionDate : '12/04/2023',
        transactionAmount : -4300,
        transactionTime : '05 : 50',
        getTransactionType (){
           return  this.transactionAmount > 0 ? 'credit' : 'debit' 
        } 
    },
    {
        transactionFirstName : 'IFAYEMI',
        transactionLastName: 'FAJEMILEYIN',
        transactionDate : '10/02/2023',
        transactionAmount : 5000,
        transactionTime : '03 : 23',
        getTransactionType (){
            return  this.transactionAmount > 0 ? 'credit' : 'debit' 
        } 
    },
    {
        transactionFirstName : 'IDIARABA',
        transactionLastName: 'IDIORO',
        transactionDate : '12/03/2023',
        transactionAmount : -420,
        transactionTime : '07 : 00',
        getTransactionType (){
            return  this.transactionAmount > 0 ? 'credit' : 'debit' 
        } 
    },
    {
        transactionFirstName : 'IDIABAJO',
        transactionLastName: 'IDIARERE',
        transactionDate : '20/03/2023',
        transactionAmount : 420,
        transactionTime : '07 : 00',
        getTransactionType (){
            return  this.transactionAmount > 0 ? 'credit' : 'debit' 
        } 
    }

]
}
const acc3 = {
    firstName: 'adeshina',
    lastName: 'owoade',
    pin: 3333,
    email: 'adesh@gmail.com',
    accountNo: 7018937398,
    phoneNumber: '07018937398',
    transactions: [{
        transactionFirstName : 'MODERN',
        transactionLastName: 'LANGUAGE',
        transactionDate : '20/03/2023',
        transactionAmount : -3520,
        transactionTime : '08 : 00',
        Remark:'',
        getTransactionType (){
           return  this.transactionAmount > 0 ? 'credit' : 'debit' 
        } 
    },
    {
        transactionFirstName : 'ADIO',
        transactionLastName: 'MICHEAL',
        transactionDate : '04/01/2023',
        transactionAmount : 520,
        transactionTime : '12 : 10',
        getTransactionType (){
            return  this.transactionAmount > 0 ? 'credit' : 'debit' 
        } 
    },
    {
        transactionFirstName : 'AJIBOLA',
        transactionLastName: 'MOSES',
        transactionDate : '10/04/2023',
        transactionAmount : -3030,
        transactionTime : '05 : 50',
        getTransactionType (){
           return  this.transactionAmount > 0 ? 'credit' : 'debit' 
        } 
    },
    {
        transactionFirstName : 'OLOBE',
        transactionLastName: 'fransis',
        transactionDate : '10/02/2023',
        transactionAmount : 500,
        transactionTime : '03 : 23',
        getTransactionType (){
            return  this.transactionAmount > 0 ? 'credit' : 'debit' 
        } 
    },
    {
        transactionFirstName : 'MONDAY',
        transactionLastName: 'ogaoga',
        transactionDate : '12/03/2023',
        transactionAmount : -420,
        transactionTime : '07 : 00',
        getTransactionType (){
            return  this.transactionAmount > 0 ? 'credit' : 'debit' 
        } 
    },
    {
        transactionFirstName : 'AJIMSON',
        transactionLastName: 'LAURENCE',
        transactionDate : '20/03/2023',
        transactionAmount : 500,
        transactionTime : '07 : 00',
        getTransactionType (){
           return  this.transactionAmount > 0 ? 'credit' : 'debit' 
        } 
    }
    
]
}

const accounts = [acc1, acc2, acc3]



/////////SHOW TRANSACTION HISTORY/////////
transactionHisBtn.addEventListener('click', function(e){
    e.preventDefault();
    home.classList.add('hidden')
    historyPage.classList.remove('hidden')
})
backHome.addEventListener('click', function(e){
    e.preventDefault();
    home.classList.remove('hidden')
    historyPage.classList.add('hidden')
})

gotoSignUpBtn.addEventListener('click', function(e){
    e.preventDefault()
    loginForm.classList.add('hidden')
    createAccount.classList.remove('hidden')
})
///////////////////////////ACCOUNTS LOGIN VALIDATION
loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    let status = 'failed';
    accNumber = Number(inputAccNumber.value)
    accPin = Number(inputPin.value)
   let activeAcc = accounts.find(account => accNumber === account.accountNo && accPin === account.pin)

   console.log(accNumber, pin)

   if(activeAcc){ 
   home.classList.remove('hidden')
   navBar.classList.remove('hidden')
   loginForm.classList.add('hidden')
   console.log(activeAcc)
   status = 'success'

   getTransactionHistory(activeAcc)
   calcBalance(activeAcc)
   greet(activeAcc)
}
   const authType = status === 'success' ? 'success':'failed'
    const authText = status === 'success' ? 'Authorized' : 'Unauthorized'
    const html = `
    <div class="authentication-status authentication-${authType}">${authText}</div>
    `
    document.querySelector('body').insertAdjacentHTML('afterbegin', html)
    
    
    setTimeout(() => document.querySelector('.authentication-status').remove()
    , 2000)

})


const createNewAccount = function(firstName, lastName, pin, email, phoneNumber){
    
    class Account {
        constructor(firstName, lastName, pin, email, phoneNumber, ){
            this.firstName = firstName;
            this.lastName = lastName;
            this.pin = pin;
            this.email = email;
            this.phoneNumber = phoneNumber;
        }
      
        get accountNo () {
          const acc = this.phoneNumber.slice(1)
            return Number(acc)
        }
        transactions = []
    }

 accounts.push( new Account (firstName, lastName, pin, email, phoneNumber))
}
createNewAccount('ayinla', 'owoadey', 4444, 'yusuf@gmail.com', '09023456789')
console.log(accounts)

///////////////REGISTER/////////////
const createAccount = document.querySelector('.create-new-account')
const firstName = document.querySelector('#firstname')
const lastName = document.querySelector('#lastname')
const email = document.querySelector('#email')
const phoneNumber = document.querySelector('#phonenumber')
const pin = document.querySelector('#create-pin')
const confirmPin = document.querySelector('#confirm-pin')
const signUpBtn = document.querySelector('.sign-up')
const goToLoginBtn = document.querySelector('#goto-login')

goToLoginBtn.addEventListener('click', function(e){
    e.preventDefault()
    createAccount.classList.add('hidden')
    loginForm.classList.remove('hidden')
})


createAccount.addEventListener('submit', function(e){
    e.preventDefault();

    if (!firstName.value || !lastName.value || !Number(pin.value) || !email.value || !phoneNumber.value) {alert('all space must be filled ')
return}

    const eitherExist = accounts.some((acc) => acc.phoneNumber === phoneNumber.value || acc.email === email.value)

    const emailExist = accounts.some((acc) => acc.email === email.value)

    const phoneNumberExist = accounts.some((acc) => (acc.phoneNumber === phoneNumber.value && phoneNumber.value !== '') || (acc.email === email.value && email.value !== ''))
    
    if(eitherExist) {
    alert('Email or Phone Number already existed')
    
    emailExist ?  email.style.border = '2px solid red' : phoneNumber.style.border = '2px solid red'
    return
}
if(pin.value !== confirmPin.value){
    alert('Pin not confirmed')
    confirmPin.style.border = '2px solid red'
    return
}

email.style.border = 'none'
phoneNumber.style.border = 'none'
confirmPin.style.border = 'none'

   createNewAccount(firstName.value, lastName.value, Number(pin.value), email.value, phoneNumber.value)
    console.log(accounts)
    
    firstName.value = lastName.value = pin.value = email.value = phoneNumber.value = confirmPin.value = ''
    createAccount.classList.add('hidden')
    loginForm.classList.remove('hidden')
})