let trigger = document.querySelector('#nav-trigger');
let mobileMenu = document.querySelector('#mobile-menu');
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
    
})