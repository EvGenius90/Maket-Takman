'use strict'

const linkClick = document.querySelectorAll('.link-click')


for(let i of linkClick){

    i.addEventListener('click', function(){
        i.classList.add('click-Color')
    })

}

// карусель товаров
const carousel = document.querySelector('.services__carousel')


let offset = 0

document.querySelector('.arrow-right').addEventListener('click', function(){

    offset -= 280

    if(offset < -1520){
        offset = 0
    }

    carousel.style.left = offset + 'px'

})

document.querySelector('.arrow-left').addEventListener('click', function(){

    offset += 280

    if(offset > 1520){
        offset = 0
    }

    carousel.style.left = offset + 'px'
    

})


// карусель афиши
const afishaBlock = document.querySelector('.afisha__block')

let counter = 0

document.querySelector('.afisha__arrow-right').addEventListener('click', _=>{
    counter -= 280

    if(counter < -2520){
        counter = 0
    }

    afishaBlock.style.left = counter + 'px'

})

document.querySelector('.afisha__arrow-left').addEventListener('click', _=>{
    counter += 280

    if(counter > 1420){
        counter = 0
    }

    afishaBlock.style.left = counter + 'px'

})

// кнопка для бургера
var burger = document.querySelector('.burger')
var headerNavigation = document.querySelector('.header__navigation')
var btnBuy = document.querySelector('.btn-buy')
var socials = document.querySelector('.socials')

burger.addEventListener('click', _=>{
    burger.classList.toggle('burger__active')
    headerNavigation.classList.toggle('header__navigation-active')
    btnBuy.classList.toggle('btn-buy-active')
    socials.classList.toggle('socials-active')
})