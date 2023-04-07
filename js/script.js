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

const links = document.querySelector('.links')
const pages = document.querySelectorAll('.page')
const linkBtn = document.querySelectorAll('.link')

links.addEventListener('click', function(e){
    e.preventDefault();
    const link = e.target
   
    if(!link.classList.contains('link'))return
    
    console.log('link clicked❤')

    linkBtn.forEach(btn => btn === e.target ? btn.closest('.link-item').classList.add('active'): btn.closest('.link-item').classList.remove('active'));


    // pages.forEach(page => {
    //     if()
    // })


})