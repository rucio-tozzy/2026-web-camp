// FAQ 收合：控制問答項目的展開狀態與箭頭文字。

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
