const links = document.querySelector('.header__nav');
const sections = document.querySelectorAll('.container > section');
export function init(){
    eventToLinks();
}
function eventToLinks(){
    links.addEventListener('click',clickOnTab);
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
function clickOnTab(e){
    const elem = e.target;
    if (elem.classList.contains('header__nav__link')){
        const tab = document.querySelector(elem.getAttribute("href"));
        const attr = tab.getAttribute("id");
        disableSections(attr);
        if (tab.classList.contains('disabled')){
            tab.classList.remove('disabled');
            tab.classList.add('animation');
            setTimeout(()=>{
                tab.classList.remove('animation');
            },300);
        }
    }
}
