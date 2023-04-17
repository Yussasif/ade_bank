///////////IMPORTING ELEMENT FROM HTML//////////////
let popUPMessage = document.querySelector('.popup-message')
const popUp = document.querySelector('.pop-up')
const cancelBtn = document.querySelector('.cancel')
const okBtn  = document.querySelector('.ok')
const overlay = document.querySelector('.blur')
const accountBalance = document.querySelector('.balance-amount')
const transferBtn = document.querySelector('#transfer-btn')
const loanBtn = document.querySelector('#loan-btn')
const withdrawBtn = document.querySelector('#withdraw-btn')
const links = document.querySelector('.links')
const pages = document.querySelectorAll('.page')
const linkBtn = document.querySelectorAll('.link')
const getRewardBtn = document.querySelector('.claim-btn-cont')
const home = document.querySelector('#home')
const recentHistory =  document.querySelector('.recent-history')
const transactionHisBtn = document.querySelector('#transaction-history-btn')
const historyPage = document.querySelector('.transaction-history-page')
const transactionHistory = document.querySelector('.transaction-history')
const backHome = document.querySelector('.back')

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
        transactionDate : '20/03/2023',
        transactionAmount : -320,
        transactionTime : '07 : 00',
        getTransactionType (){
           return  this.transactionAmount > 0 ? 'credit' : 'debit' 
        } 
    },
    {
        transactionFirstName : 'ogundabeje',
        transactionLastName: 'oloriole',
        transactionDate : '04/01/2023',
        transactionAmount : 520,
        transactionTime : '12 : 00',
        getTransactionType (){
           return  this.transactionAmount > 0 ? 'credit' : 'debit' 
        } 
    },
    {
        transactionFirstName : 'aderemi',
        transactionLastName: 'fajemilehin',
        transactionDate : '10/04/2023',
        transactionAmount : -430,
        transactionTime : '07 : 00',
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
    transactions: [450, 240, -240, 2300, -240, 400, -2245, -645]
}
const acc3 = {
    firstName: 'adeshina',
    lastName: 'owoade',
    pin: 1111,
    email: 'adesh@gmail.com',
    accountNo: 7018937398,
    phoneNumber: '07018937398',
    transactions: [470, 540, -330, 920, -440, 3000, -245, -1145]
}

const accounts = [acc1, acc2, acc3]

//////////////////DISPLAYING EACH TRANSACTION//////////////////
recentHistory.textContent = ''
transactionHistory.textContent = ''
acc1.transactions.forEach(function(transaction) {
    const markup = `
            <div class="transactions ${transaction.getTransactionType()}-transaction">
                <div class="trans-type-cont">
                 <img src="./img/logo.png" alt="Transaction type" class="transaction-type" width="20px" height="20px">

                </div>
                <div class="transaction-to-fro">
                    <p class="trans-name">${transaction.transactionFirstName} ${transaction.transactionLastName}</p> 
                    <p class="trans-time"> ${transaction.transactionTime}PM
                    <span class='trans-date'> ${transaction.transactionDate}</span></p>
                </div>

                <div class="transaction-amount">
                    <p>${transaction.transactionAmount}</p>
                </div>
            </div>
    `
recentHistory.insertAdjacentHTML("afterbegin", markup)
transactionHistory.insertAdjacentHTML('afterbegin', markup)
})

const calcBalance = acc1.transactions.reduce((accumulator, transaction) => transaction.transactionAmount + accumulator ,0)
accountBalance.textContent = `$${calcBalance}`

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