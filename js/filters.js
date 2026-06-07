// 分類篩選：處理作品與部落格列表的分類按鈕、卡片顯示與空狀態。

const filterGroups = document.querySelectorAll('[data-filter-group]');

filterGroups.forEach((filterGroup) => {
  filterGroup.addEventListener('click', (event) => {
    const target = event.target;

    if (!(target instanceof HTMLButtonElement) || !target.dataset.filter) {
      return;
    }

    const filter = target.dataset.filter;
    const section = target.closest('section');
    const cards = Array.from(section?.querySelectorAll('[data-category]') ?? []);
    const emptyState = section?.querySelector('[data-empty-state]');
    let visibleCount = 0;

    filterGroup.querySelectorAll('button').forEach((button) => {
      button.classList.toggle('is-active', button === target);
      button.setAttribute('aria-pressed', String(button === target));
    });

    cards.forEach((card) => {
      const category = card.getAttribute('data-category') ?? '';
      const categories = category.split(' ').filter(Boolean);
      const shouldShow = filter === 'all' || categories.includes(filter);

      card.classList.toggle('is-hidden-by-filter', !shouldShow);
      if (shouldShow) visibleCount += 1;
    });

    if (emptyState) {
      emptyState.classList.toggle('is-visible', visibleCount === 0);
    }
  });
});
