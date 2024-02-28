$ ('.card').owlCarousel({

    margin:20,
    loop:true,
    autoplayTimeOut:2000,
    autoplayHoverPauser:true,
    responsive:{
        0:{
            items:1,
            nav:false


        },
        500:{
            items:2,
            nav:false

        },
        1400:{
            items:3,
            nav:false
        }
    }


})

const menu= document.querySelector('.menu');
const Navmenu= document.querySelector('.nav-menu');

menu.addEventListener('click',()=>{
menu.classList.toggle('ativo');
Navmenu.classList.toggle('ativo');
}) 

