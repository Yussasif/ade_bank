///////////CREATE NEW ACCOUNT ON SIGN UP////////////////
class Account {
    constructor(firstName, lastName, pin, email, phoneNumber, ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.pin = pin;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    transactions = []
  
    get accountNo () {
      const acc = this.phoneNumber.slice(1)
        return Number(acc)
    }

    get balance () {
        const calcBalance = this.transactions.reduce((accumulator, transaction) => transaction.amount + accumulator ,0)
     return calcBalance
    }

}



///////////CREATE NEW TRANSACTION/////////////
class Transaction {
    constructor (firstName, lastName, amount, description){
        this.firstName = firstName;
        this.lastName = lastName;
        this.amount = amount;
        this.description = description;
    }

    get type (){
        return  this.amount > 0 ? 'credit' : 'debit' 
     } 
    
    get time(){
        const now = new Date()
        const hours = `${now.getHours()}`.padStart(2, '0')
        const minutes = `${now.getMinutes()}`.padStart(2, '0')
        return `${hours}:${minutes}`
    }
    
    get date (){
        const now = new Date()
        const date = `${now.getDate()}`.padStart(2, '0')
        const month = `${(now.getMonth() +1)}`.padStart(2, '0')
        const year = now.getFullYear()
        return `${date}/${month}/${year}`

    }


}

/////////CREATE A DEBIT TRANSACTION //////////////
class Transfer extends Transaction {
    type = 'debit'

    constructor (accNumber, firstName, lastName, amount, description,){
        super(firstName, lastName, amount, description)
        this.accNumber = accNumber
    }
        
}

//////CREATE A CREDIT TRANSACTION /////////////  
    class Credit extends Transaction{

    type =  'credit'

    constructor (firstName, lastName, amount, description){
        super(firstName, lastName, amount, description)}

}

const createNewAccount = function(firstName, lastName, pin, email, phoneNumber){
    const newAccount = new Account (firstName, lastName, pin, email, phoneNumber)
    newAccount.transactions.push(new Credit('ADE', 'BANK', 5000, 'Demo Balance'))
 accounts.push(newAccount)
}

//////////////ACCOUNTS/////////////////////
const accounts = []

const acc1 = new Account('yusuf', 'owoade', 1111, 'owoadeadetunji1@gmail.com', '07018937378')
acc1.transactions.push(new Credit('adigun', 'afolabi', 4000, 'me to you'),
new Transfer('0987654321','modupe', 'oshe', -1000, 'manage am'),new Transfer('0987654521','adewale', 'akeem', -500, 'for food'), new Credit('fola', 'anifowose', 2500, 'up keep'), new Transfer('1187654321','abeeb', 'olayemi', -1000, 'laudry fee'))
accounts.push(acc1)
// const acc1 = {
//     firstName: 'yusuf',
//     lastName: 'owoade',
//     pin: 1111,
//     email: 'owoadeadetunji1@gmail.com',
//     accountNo: 7018937378,
//     phoneNumber: '07018937378',
//     transactions: [
//         {
//         transactionFirstName : 'majek',
//         transactionLastName: 'Potfolio',
//         transactionDate : 'Today',
//         transactionAmount : -320,
//         transactionTime : '08 : 00',
//         transactionDescription: 'money laundring',
//         getTransactionType (){
//            return  this.transactionAmount > 0 ? 'credit' : 'debit' 
//         } 
//     },
//     {
//         transactionFirstName : 'ogundabeje',
//         transactionLastName: 'oloriole',
//         transactionDate : 'Yesterday',
//         transactionAmount : 520,
//         transactionTime : '12 : 10',
//         getTransactionType (){
//             return  this.transactionAmount > 0 ? 'credit' : 'debit' 
//         } 
//     },
//     {
//         transactionFirstName : 'aderemi',
//         transactionLastName: 'fajemilehin',
//         transactionDate : '5days ago',
//         transactionAmount : -430,
//         transactionTime : '05 : 50',
//         getTransactionType (){
//            return  this.transactionAmount > 0 ? 'credit' : 'debit' 
//         } 
//     },
//     {
//         transactionFirstName : 'alokolohunkigbe',
//         transactionLastName: 'fransis',
//         transactionDate : '10/02/2023',
//         transactionAmount : 5000,
//         transactionTime : '03 : 23',
//         getTransactionType (){
//             return  this.transactionAmount > 0 ? 'credit' : 'debit' 
//         } 
//     },
//     {
//         transactionFirstName : 'adigun',
//         transactionLastName: 'ogaoga',
//         transactionDate : '12/03/2023',
//         transactionAmount : -420,
//         transactionTime : '07 : 00',
//         getTransactionType (){
//             return  this.transactionAmount > 0 ? 'credit' : 'debit' 
//         } 
//     },
//     {
//         transactionFirstName : 'felix',
//         transactionLastName: 'idiaba',
//         transactionDate : '20/03/2023',
//         transactionAmount : 420,
//         transactionTime : '07 : 00',
//         getTransactionType (){
//             return  this.transactionAmount > 0 ? 'credit' : 'debit' 
//         } 
//     }
    
// ]
// }
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


///////////IMPORTING ELEMENT FROM HTML//////////////
//////////////////LOGIN/////////////////
const loginForm = document.querySelector('.login-form')
const inputAccNumber = document.querySelector('#acc-Number')
const inputPin = document.querySelector('#pin')
const loginBtn = document.querySelector('#login-btn')
const gotoSignUpBtn = document.querySelector('.goto-sign-up')
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
const logoutBtn = document.querySelector('.logout')
///INVEST///
///CARDS///
///TRANSACTION HISTORY///
const historyPage = document.querySelector('.transaction-history-page')
const transactionHistory = document.querySelector('.transaction-history')
const backHome = document.querySelectorAll('.back')
///TRANSFER///
const transferPage = document.querySelector('.transfer-page')

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
//////LOG OUT////////
logoutBtn.addEventListener('click', function(e){
    e.preventDefault();
    // openPopUp()
    popUPMessage.textContent = 'Click "OK" to Logout'
    home.classList.add('hidden')
    loginForm.classList.remove('hidden')
})

//////////////////DISPLAYING EACH TRANSACTIONs//////////////////
const getTransactionHistory = function(account){
    recentHistory.textContent = transactionHistory.textContent = ''

    account.transactions.forEach(function(transaction) {
    const {firstName, lastName, date, amount, time, type} = transaction
        const markup = `
        <div class="transactions ${type}-transaction">
        <div class="trans-type-cont">
        <img src="./img/logo.png" alt="Transaction type" class="transaction-type" width="20px" height="20px">
        </div>
        <div class="transaction-to-fro">
        <p class="trans-name">${capitalize(firstName)} ${capitalize(lastName)}</p> 
        <p class="trans-time"> ${time}
        <span class='trans-date'> ${date}</span></p>
        </div>
        
        <div class="transaction-amount">
        <p>$${amount}</p>
        </div>
        </div>
        `
recentHistory.insertAdjacentHTML("afterbegin", markup)
transactionHistory.insertAdjacentHTML('afterbegin', markup)
})}




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
const pendings = [loanBtn, withdrawBtn, getRewardBtn]
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
    transferPage.classList.add('hidden')

    linkBtn.forEach(btn => btn === e.target ? btn.closest('.link-item').classList.add('active'): btn.closest('.link-item').classList.remove('active'));
  
    pages.forEach(page => page.dataset.tag === e.target.closest('.link-item').dataset.tag ? page.classList.remove('hidden') : page.classList.add('hidden'))

})




/////////SHOW TRANSACTION HISTORY/////////
transactionHisBtn.addEventListener('click', function(e){
    e.preventDefault();
    home.classList.add('hidden')
    historyPage.classList.remove('hidden')
})
//////////////BACK HOME///////////
const goToHome = function(){
    home.classList.remove('hidden')
    historyPage.classList.add('hidden')
    transferPage.classList.add('hidden')
}
backHome.forEach(back => back.addEventListener('click', function(e){
    e.preventDefault();
    goToHome()
}))

gotoSignUpBtn.addEventListener('click', function(e){
    e.preventDefault()
    loginForm.classList.add('hidden')
    createAccount.classList.remove('hidden')
})


////////////////////UPDATE UI////////////
const updateUI = function(activeAcc){
    getTransactionHistory(activeAcc)
//////////DISPLAY BALANCE//////////////
accountBalance.textContent = `$${activeAcc.balance}`
   greet(activeAcc)
}
///////////////////////////ACCOUNTS LOGIN VALIDATION
// let activeAcc = accounts.find(account => accNumber === account.accountNo && accPin === account.pin)
let activeAcc ;
loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    let status = 'failed';
    accNumber = Number(inputAccNumber.value)
    accPin = Number(inputPin.value)
    activeAcc = accounts.find(account => accNumber === account.accountNo && accPin === account.pin)

   console.log(accNumber, accPin)

   if(activeAcc){ 
   home.classList.remove('hidden')
   navBar.classList.remove('hidden')
   loginForm.classList.add('hidden')
   status = 'success'

   updateUI(activeAcc)
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
const goToLoginBtn = document.querySelectorAll('.goto-login')
const welcome = document.querySelector('.welcome')
const welcomeArticle = document.querySelector('.welcome-article')

goToLoginBtn.forEach(btn => btn.addEventListener('click', function(e){
    e.preventDefault()
    createAccount.classList.add('hidden')
    loginForm.classList.remove('hidden')
    welcome.classList.add('hidden')
}))


createAccount.addEventListener('submit', function(e){
    e.preventDefault();

    if (!firstName.value || !lastName.value || !Number(pin.value) || !email.value || !phoneNumber.value) {alert('all space must be filled ')
return}

    const eitherExist = accounts.some((acc) => acc.phoneNumber === phoneNumber.value || acc.email === email.value)

    const emailExist = accounts.some((acc) => acc.email === email.value)

    // const phoneNumberExist = accounts.some((acc) => (acc.phoneNumber === phoneNumber.value && phoneNumber.value !== '') || (acc.email === email.value && email.value !== ''))
    
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

    
    createAccount.classList.add('hidden')
    welcome.classList.remove('hidden')
    welcomeArticle.textContent = ''
    
    welcomeMessage = `
    <h4>Welcome, <span>${firstName.value}</span></h4>
    <p>Hi, <span>${firstName.value}</span> thank you for choosing Adebank.</p>
    <p>Here we provide you a seamless banking transactions without delay or waste of time, all transactions made with ADE a successful with 5 minutes max</p>
    <p>We have generated your ACcount Number for you from the phone Number you provided</p>
    <p>Accout Number: <span>${phoneNumber.value.slice(1)}</span></p>
    <p>your login pin is the pin you provided during registration.</p>
    <p>We hope you enjoy banking with us</p>
    <p>Thanks for choosing <span>ADE BANK</span></p>
    `
    
    welcomeArticle.insertAdjacentHTML('afterbegin', welcomeMessage)

    firstName.value = lastName.value = pin.value = email.value = phoneNumber.value = confirmPin.value = ''
})

/////////////TRANSFER////////////////
const transferForm = document.querySelector('.transfer-form')
const recipientAcc = document.querySelector('#recipient-acc')
const transferAmount = document.querySelector('#transfer-amount')
const description = document.querySelector('#description')

transferBtn.addEventListener('click', function(e){
    e.preventDefault();
    
    home.classList.add('hidden')
    transferPage.classList.remove('hidden')

})


console.log(new Transfer ('0098636906', 'layi', 'olawale', 1000, 'for your well being'))

console.log(new Credit ('layi', 'olawale', 1000, 'for your well being'))

transferForm.addEventListener('submit', function(e){
    e.preventDefault();
const recipient = accounts.find(acc => acc.accountNo === Number(recipientAcc.value))

if(!recipientAcc.value || !transferAmount.value || !description.value){
    openPopUp()
    popUPMessage.textContent = 'All input must be filled'
    return
}
if(!recipient) {
    openPopUp()
    popUPMessage.textContent = 'Account does not exist'
    return
}
if(recipient === activeAcc){
    openPopUp()
    popUPMessage.textContent = 'You can\'t transfer money to yourself'
    return
}
if(activeAcc.balance < Number(transferAmount.value)) {
    openPopUp()
    popUPMessage.textContent = 'Insufficient fund'
    return
}
if(Number(transferAmount.value) < 100){
    openPopUp()
    popUPMessage.textContent = 'Cannot Transfer below $100'
    return
}

recipient.transactions.push(new Credit(activeAcc.firstName, activeAcc.lastName, Number(transferAmount.value), description.value))

activeAcc.transactions.push(new Transfer(recipientAcc.value, recipient.firstName, recipient.lastName, -Number(transferAmount.value), description.value))


goToHome()
openPopUp()
popUPMessage.textContent = `You've successfully transfered $${transferAmount.value} to ${capitalize(recipient.firstName)} ${capitalize(recipient.lastName)} 🎉`


recipientAcc.value = transferAmount.value = description.value = ''
updateUI(activeAcc)
})