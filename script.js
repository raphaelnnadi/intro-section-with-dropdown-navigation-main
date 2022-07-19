'use strict';

const primaryNav = document.querySelector('.flexy');
const navToggle = document.querySelector('.mobile-nav-toggle');
const dropdown = document.querySelectorAll('.dropdown');

navToggle.addEventListener('click', function () {
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
    console.log(visibility);
  } else if (visibility === 'true') {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});

dropdown.forEach(item => {
  item.addEventListener('click', function () {
    console.log('jdjdjd');

    const subMenu = item.nextElementSibling;
    console.log(subMenu);

    if (!item.classList.contains('collapsing')) {
      // Open the accordion item
      if (!item.classList.contains('open')) {
        console.log('yhe eehe');

        // Remove 'collapse' on the dropdown-content class and add 'collapsing'
        subMenu.style.display = ' block';
        let subHeight = subMenu.clientHeight;

        setTimeout(() => {
          subMenu.style.height = subHeight + 'px';
          subMenu.style.display = '';
        }, 1);

        subMenu.classList = 'dropdown-content collapsing';

        // After some time, remove 'collapsing' class and add 'collapse open' class
        setTimeout(() => {
          console.log('close accordion');
          subMenu.classList = 'dropdown-content collapse open';
        }, 300);
      } else {
        // remove 'collapse open' and replace with 'collapsing'
        subMenu.classList = 'dropdown-content collapsing';

        setTimeout(() => {
          subMenu.style.height = '0px';
        }, 1);

        // After x amount of time, remove 'collapsing'replace with 'collapse'

        setTimeout(() => {
          console.log('close');
          subMenu.classList = 'dropdown-content collapse';
          subMenu.style.height = '';
        }, 300);
      }
    }

    item.classList.toggle('open');
  });
});
