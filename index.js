let menu = document.querySelector('.menu')

function listResponsive(){
    if(!menu.classList.contains('list-responsive')){
        menu.classList.add('list-responsive')
    }else{
        menu.classList.remove('list-responsive')
    }
}

//navbar active status

const navLinkEls = document.querySelectorAll('.nav-link');
const sectionEls = document.querySelectorAll('.section');

let currentSection = 'home';

window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        if(window.scrollY >= (sectionEl.offsetTop - 200)){
            currentSection = sectionEl.id;
        }
    });
    navLinkEls.forEach(navLinkEl => {
        if(navLinkEl.href.includes(currentSection)){
            navLinkEl.classList.add('active');
        }else{
            navLinkEl.classList.remove('active');
        }
    })
});


function contactScroll(){
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}