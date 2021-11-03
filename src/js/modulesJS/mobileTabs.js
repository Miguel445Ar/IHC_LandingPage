const mobileTabs = document.querySelector('.mobileNav');
const sections = document.querySelectorAll('.container > section');
const lines = document.querySelector('.header__lines');
const closeNav = document.querySelector('#closeNav');

export function MobileNavBar(){
    mobileNavEvents();
    lines.addEventListener('click',linesEvent);
    closeNav.addEventListener('click',closeNavEvent);
}

function mobileNavEvents(){
    mobileTabs.addEventListener('click',showingSections);
}
function linesEvent(){
    const navBar = document.querySelector('.mobileNav');
    if (navBar.classList.contains('enabled') == false)
        navBar.classList.add('enabled');
}
function closeNavEvent() {
    const navBar = document.querySelector('.mobileNav');
    if(navBar.classList.contains('enabled')){
        navBar.classList.add('closing');
        setTimeout(() => {
            navBar.classList.remove('closing');
            navBar.classList.remove('enabled');
        },500);
    }

}
function showingSections(e){
    const elem = e.target;
    let tab;
    if (elem.classList.contains('mobileNav__link')){
        tab = elem
    }else {
        const parent = elem.parentElement;
        tab = parent;
    }
    if(tab.text ==  "X")
        return;
    const section = document.querySelector(tab.getAttribute("href"));
    const attr = section.getAttribute("id");
    disableSections(attr);
    if (section.classList.contains('disabled')){
        section.classList.remove('disabled');
        section.classList.add('animation');
        setTimeout(()=>{
            section.classList.remove('animation');
        },300);
    }
}
function disableSections(exception){
    for(let i = 0; i<sections.length;++i){
        if (sections[i].getAttribute("id") === exception)
            continue;
        if (sections[i].classList.contains('disabled') == false){
            sections[i].classList.add('disabled');
        }
    }
}