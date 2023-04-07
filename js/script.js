const home = document.querySelector('.home')
const reward = document.querySelector('.reward')
const invest = document.querySelector('.invest')

const homeBtn = document.querySelector('.home-btn')
const rewardBtn = document.querySelector('.reward-btn')
const investBtn = document.querySelector('.invest-btn')

homeBtn.addEventListener('click', function(e){
    e.preventDefault();
    home.classList.remove('hidden')
    reward.classList.add('hidden')
    invest.classList.add('hidden')
})
investBtn.addEventListener('click', function(e){
    e.preventDefault();
    home.classList.add('hidden')
    reward.classList.add('hidden')
    invest.classList.remove('hidden')
})
rewardBtn.addEventListener('click', function(e){
    e.preventDefault();
    home.classList.add('hidden')
    reward.classList.remove('hidden')
    invest.classList.add('hidden')
})