'use strict';
//our services
//переделать бы
function ourServiceSwitcher() {
    const tabsTitle = document.getElementById('our-service__tabs');
    tabsTitle.addEventListener('click', tabSwitcher);
    const tabs = document.querySelectorAll('.our-services__tab');
    const tabsContent = document.querySelectorAll('.our-services__tab-content');
    function tabSwitcher(e) {
        tabs.forEach((el) => {
            el.classList.remove('service-active');
        });
        tabsContent.forEach((el) => {
            el.classList.remove('service-active');
        });
        e.target.classList.add('service-active');
        const idForContent = e.target.getAttribute('data-content');
        document.getElementById(idForContent).classList.add('service-active');
    }
}
ourServiceSwitcher();

//filter our amazing work
const allCards = document.querySelectorAll('.amazing-work__gallery-card');
function ourAmazingFilter() {
    const filterMain = document.querySelectorAll('.amazing-work__tabs-list')[0].addEventListener('click', switchFilter);
    const filterName = document.querySelectorAll('.amazing-work__tab');
    function switchFilter(e) {
        filterName.forEach((elFilter) => {
            elFilter.classList.remove('amazing-active');
        });
        e.target.classList.add('amazing-active');
        allCards.forEach((el) => {
            el.classList.add('amazing-hidden');
            if (e.target.id === 'all') {
                if (!el.classList.contains('hide-btn')) {
                    el.classList.remove('amazing-hidden');
                }
            } else if (e.target.id === el.getAttribute('data-filter') && !el.classList.contains('hide-btn')) {
                el.classList.remove('amazing-hidden');
            }
        });
    }
}
ourAmazingFilter();

//button pseudoloader
const loadmoreBtn = document.getElementById('loadmoreBtn');
loadmoreBtn.addEventListener('click', pressBtn);
const loading = document.getElementById('loading');
function pressBtn() {
    loadmoreBtn.innerHTML = '<h2 class="animate">Loading</h2>';
    loadmoreBtn.style.animation = 'load 0.5s ease';
    setTimeout(removeBtn, 2000);
    function removeBtn() {
        loadmoreBtn.remove();
        const amazingWork = (document.getElementsByClassName('amazing-work')[0].style.paddingBottom = '100px');
        loadmorePic();
    }
}
function loadmorePic() {
    let activeFilter = document.getElementsByClassName('amazing-active')[0];
    allCards.forEach((el) => {
        el.classList.add('amazing-hidden');
        el.classList.remove('hide-btn');
        if (activeFilter.id === 'all') {
            el.classList.remove('amazing-hidden');
        } else if (el.getAttribute('data-filter') === activeFilter.id) {
            el.classList.remove('amazing-hidden');
        }
    });
}

//slider
const feedbackContent = document.querySelectorAll('.feedback__slider-tab-content'); //slider-content-active
const feedbackTab = document.querySelectorAll('.feedback__slider-tabs__tab > li'); //slider-active-tab
const smallPhotosClick = document.querySelectorAll('.feedback__slider-tab-photo-small');
const feedbackSlider = document.getElementById('feedback__slider-tabs');
feedbackSlider.addEventListener('click', changeCount);
let count = 0;

function changeCount(e) {
    if (e.target.id === 'previousSlide' || e.target.innerText === '<') {
        if (count - 1 === -1) {
            count = 3;
        } else {
            count--;
        }
    } else if (e.target.id === 'nextSlide' || e.target.innerText === '>') {
        if (count + 1 === 4) {
            count = 0;
        } else {
            count++;
        }
    } else if (e.target === smallPhotosClick[0]) {
        count = 0;
    } else if (e.target === smallPhotosClick[1]) {
        count = 1;
    } else if (e.target === smallPhotosClick[2]) {
        count = 2;
    } else if (e.target === smallPhotosClick[3]) {
        count = 3;
    }
    console.log(count);
    tabSwitcher();
}

function tabSwitcher() {
    feedbackContent.forEach((el) => {
        el.classList.remove('slider-content-active');
    });
    feedbackTab.forEach((el) => {
        el.classList.remove('slider-active-tab');
    });
    feedbackContent[count].classList.add('slider-content-active');
    feedbackTab[count].classList.add('slider-active-tab');
}
