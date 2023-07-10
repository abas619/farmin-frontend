AOS.init({
    easing: 'ease-in-out-sine'
});

var body = document.querySelector('body');

if (document.querySelector('.btn-mobile-menu') != null) {
    var btnMobileMenu = document.querySelector('.btn-mobile-menu');
    var sidebarMenu = document.getElementById('sidebar-menu');
    var menuOverlay = document.querySelector('.overlay-back');
    var btnCloseSidebar = document.querySelector('.btn-close-menu');
    btnMobileMenu.onclick = () => {
        menuOverlay.classList.add('active');
        sidebarMenu.classList.add('active');
    }
    menuOverlay.onclick = () => {
        menuOverlay.classList.remove('active');
        sidebarMenu.classList.remove('active');
    }
    btnCloseSidebar.onclick = () => {
        menuOverlay.classList.remove('active');
        sidebarMenu.classList.remove('active');
    }
}


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


if (document.querySelector('.status-content-cards') != null) {
    var cardsList = document.querySelectorAll('.card-status')
    cardsList[1].classList.add('active');
    cardsList.forEach(card => {
        card.addEventListener('mouseover', () => {
            cardsList.forEach(card => card.classList.remove('active'));
            // اضافه کردن کلاس active به کارت فعلی
            card.classList.add('active');
        });
    })
}


// Desktop Search Content
if (document.getElementById('btn-desktop-search') !== null) {
    var btnDesktopSearch = document.getElementById('btn-desktop-search');
    var desktopSearchContent = document.getElementById('desktop-search-content');
    var arrowBack = desktopSearchContent.querySelector('.btn-arrow-back');
    var btnclear = desktopSearchContent.querySelector('.btn-clear');
    var mobileSearchInput = document.querySelector('.desktop-search-input');

    btnDesktopSearch.onclick = () => {
        desktopSearchContent.classList.add('active');
        body.classList.add('fixedposition');
    }

    arrowBack.addEventListener('click', function () {
        desktopSearchContent.classList.remove('active');
        body.classList.remove('fixedposition');
    });

    mobileSearchInput.addEventListener('input', input => {
        if (input.target.value.length > 0) {
            btnclear.classList.add('active');
        } else {
            btnclear.classList.remove('active');
        }
    });

    btnclear.addEventListener('click', function () {
        mobileSearchInput.value = "";
        this.classList.remove('active');
        mobileSearchInput.focus();
    });
}

// Show Side Basket
if (document.getElementById('btn-basket') !== null) {
    var btnSideBasket = document.getElementById('btn-basket');
    var sideBasket = document.getElementById('side-basket');
    var dismissBasket = document.getElementById('dismiss-basket');
    var basketOverlay = document.querySelector('.basket-overlay');
    var body = document.querySelector('body');
    btnSideBasket.addEventListener('click', function () {
        sideBasket.classList.add('active');
        basketOverlay.classList.add('active')
        body.classList.add('fixedposition');
    });
    basketOverlay.addEventListener('click', function () {
        sideBasket.classList.remove('active');
        basketOverlay.classList.remove('active')
        body.classList.remove('fixedposition');
    });
    dismissBasket.addEventListener('click', function () {
        sideBasket.classList.remove('active');
        basketOverlay.classList.remove('active')
        body.classList.remove('fixedposition');
    });
}