// 手機導覽選單：控制選單開合與點擊導覽連結後自動收合。

const siteHeader = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');

if (menuToggle && siteHeader && primaryNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteHeader.classList.toggle('is-menu-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  primaryNav.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteHeader.classList.remove('is-menu-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}
