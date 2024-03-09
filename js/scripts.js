/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/

window.addEventListener('DOMContentLoaded', event => {
    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Resim galerisi için kaydırma butonları
    const imagesContainer = document.querySelector('.images-container');
    const leftButton = document.createElement('button');
    leftButton.classList.add('slide-button', 'left');
    leftButton.innerHTML = '←';
    imagesContainer.parentNode.insertBefore(leftButton, imagesContainer);

    const rightButton = document.createElement('button');
    rightButton.classList.add('slide-button', 'right');
    rightButton.innerHTML = '→';
    imagesContainer.parentNode.insertBefore(rightButton, imagesContainer.nextSibling);

    let scrollAmount = 0;
    const step = 200;

    leftButton.addEventListener('click', function () {
        scrollAmount -= step;
        scrollAmount = Math.max(scrollAmount, 0);
        imagesContainer.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    rightButton.addEventListener('click', function () {
        scrollAmount += step;
        scrollAmount = Math.min(scrollAmount, imagesContainer.scrollWidth - imagesContainer.clientWidth);
        imagesContainer.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});
