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

const filterGroups = document.querySelectorAll('.filter-list');

filterGroups.forEach((filterGroup) => {
  filterGroup.addEventListener('click', (event) => {
    const target = event.target;

    if (!(target instanceof HTMLButtonElement) || !target.dataset.filter) {
      return;
    }

    const filter = target.dataset.filter;
    const section = target.closest('section');
    const cards = section?.querySelectorAll('[data-category]') ?? [];

    filterGroup.querySelectorAll('button').forEach((button) => {
      button.classList.toggle('is-active', button === target);
    });

    cards.forEach((card) => {
      const category = card.getAttribute('data-category') ?? '';
      const shouldShow = filter === 'all' || category.split(' ').includes(filter);
      card.classList.toggle('is-hidden-by-filter', !shouldShow);
    });
  });
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const button = item.querySelector('button');
  const icon = item.querySelector('em');

  button?.addEventListener('click', () => {
    const isOpen = item.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(isOpen));

    if (icon) {
      icon.textContent = isOpen ? '▲' : '▼';
    }
  });
});

const projectModal = document.querySelector('.project-modal');
const modalTitle = document.querySelector('#modal-title');
const modalClose = document.querySelector('[data-modal-close]');
const modalOpenButtons = document.querySelectorAll('[data-modal-open]');

if (projectModal instanceof HTMLDialogElement) {
  modalOpenButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (modalTitle) {
        modalTitle.textContent = button.getAttribute('data-modal-title') || '專案細節';
      }

      projectModal.showModal();
    });
  });

  modalClose?.addEventListener('click', () => {
    projectModal.close();
  });

  projectModal.addEventListener('click', (event) => {
    if (event.target === projectModal) {
      projectModal.close();
    }
  });
}

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();
    alert('已送出，謝謝你的填寫！');
  });
});

if (window.AOS) {
  window.AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,
    offset: 80
  });
}
