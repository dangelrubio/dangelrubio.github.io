let trigger = document.querySelector('#nav-trigger');
let mobileMenu = document.querySelector('#mobile-menu');
let menuItem = document.querySelector('.header__header-nav--mobile .header-nav__link');
let menuStatus = 1;

trigger.addEventListener('click', () =>{
    if(menuStatus === 1 ){
        mobileMenu.classList.add('menu-is-open');
        trigger.classList.add('trigger-is-open');
        menuStatus = 0;
        
    }else{
        mobileMenu.classList.remove('menu-is-open');
        trigger.classList.remove('trigger-is-open');
        menuStatus = 1;
    }
    
});
mobileMenu.addEventListener('click', () =>{
    if(menuStatus === 0){
        mobileMenu.classList.remove('menu-is-open');
        trigger.classList.remove('trigger-is-open');
        menuStatus = 1;
    }
});

menuItem.addEventListener('click', () =>{
    if(menuStatus === 0){
        mobileMenu.classList.remove('menu-is-open');
        trigger.classList.remove('trigger-is-open');
        menuStatus = 1;
    }
});