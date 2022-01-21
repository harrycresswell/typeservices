// Drawer side navigation for small devices
function initDrawer() {
  const nav = document.querySelector('.Drawer-nav');
  const navList = document.querySelector('.Drawer-menu');
  const overlay = document.querySelector('.Drawer-overlay');
  const content = document.querySelectorAll('.SiteHead, .Main, .Footer');
  const burger = document.querySelector('.js-burger');
  const subMenu = document.querySelectorAll('.Drawer-menuItem--hasChildren > a');
  const LangSwitch = document.querySelector('.LangSwitch--drawer');
  
  burger.addEventListener('click', function () {
    let burgerExpanded = burger.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !burgerExpanded);
    this.classList.toggle('is-active');
    nav.classList.toggle('is-visible');
    content.forEach(e => {
      e.classList.toggle('is-shiftedLeft');
    });
    overlay.classList.toggle('is-visible');
    navList.classList.toggle('hidden');
    LangSwitch.classList.toggle('hidden');
  });
  
  overlay.addEventListener('click', function () {
    let burgerExpanded = burger.getAttribute('aria-expanded') === 'true' || false;
    burger.setAttribute('aria-expanded', !burgerExpanded);
    burger.classList.remove('is-active');
    nav.classList.remove('is-visible');
    content.forEach(e => {
      e.classList.remove('is-shiftedLeft');
    });
    this.classList.remove('is-visible');
    navList.classList.add('hidden');
  });
  
  subMenu.forEach(e => {
    e.addEventListener('click', function (e) {
      e.preventDefault();
        this.parentElement.classList.toggle('is-active')
        this.nextElementSibling.classList.toggle('is-visible')
    });
  });
}

initDrawer();