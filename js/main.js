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

const projectData = {
  plantique: {
    date: 'Oct 16, 2025',
    dateTime: '2025-10-16',
    image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2026-web-camp/project_1.png',
    showcase: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2026-web-camp/project_modal_pic.png',
    tags: ['平面設計', '網頁設計'],
    title: '品牌視覺與電商整合，多肉植物品牌電商建置',
    intro: '從品牌識別設計到 RWD 網站開發，打造療癒系植栽購物體驗',
    principle: '植栽藝術、日系風格、暖陽視覺',
    development: 'Bootstrap、JavaScript',
    content: '我們將大自然的平靜感轉化為數位語彙，透過揉合大地色系與極簡排版，為「PLANTIQUE LIFE」建構出專屬的視覺靈魂。在開發過程中，我們秉持對細節的極致追求，確保從品牌 Logo 到每一個組件的轉場，皆展現像素級的精準。'
  },
  finance: {
    date: 'Oct 16, 2025',
    dateTime: '2025-10-16',
    image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2026-web-camp/project_2.png',
    showcase: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2026-web-camp/project_2.png',
    tags: ['網頁設計', '前端切版'],
    title: '數位產品 UI/UX 設計，個人化財務視覺化軟體',
    intro: '把複雜的資產數據與個人預算狀態重新整理成直覺的圖表資訊',
    principle: '資料層級、卡片化資訊、操作減法',
    development: 'Figma、Chart UI、CSS Grid、JavaScript',
    content: '專案重點放在資訊層級與決策路徑：首頁先呈現總覽，再讓使用者深入查看分類、區間與趨勢。視覺上使用低干擾色彩與清楚的狀態提示，減少金融產品常見的壓迫感。'
  },
  patisserie: {
    date: 'Oct 16, 2025',
    dateTime: '2025-10-16',
    image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2026-web-camp/project_3.png',
    showcase: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2026-web-camp/project_3.png',
    tags: ['平面設計', '品牌識別'],
    title: '品牌識別與包裝設計，法式甜點品牌視覺重塑',
    intro: '以柔和色彩、典雅字體與包裝延展系統，重新定位高質感甜點品牌的視覺印象',
    principle: '法式精緻、低彩度色系、包裝延展',
    development: 'Brand Guideline、Packaging Mockup、Visual System',
    content: '從 Logo 比例、輔助圖形、包裝版面到社群素材都保持一致的節奏。設計語言避免過度裝飾，讓產品照片與品牌字體成為主要視覺焦點。'
  },
  openbank: {
    date: 'Oct 16, 2025',
    dateTime: '2025-10-16',
    image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2026-web-camp/project_4.png',
    showcase: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2026-web-camp/project_4.png',
    tags: ['網頁設計', '前端切版', '後端開發'],
    title: '金融科技系統設計，Open Bank API 數據整合平台',
    intro: '串接第三方 API 並規劃穩定的後端資料流程，建構安全、清楚且可監控的資產管理後台',
    principle: '安全信任、狀態可視化、資料治理',
    development: 'API Design、Dashboard UI、RWD、Backend Flow',
    content: '此專案重點在於將第三方銀行資料轉換成一致的資料模型，並透過儀表板呈現同步狀態、交易分類與異常提醒。前端視覺採用高對比資訊卡，讓操作人員能快速辨識風險與狀態。'
  }
};

const projectDialog = document.querySelector('#projectDialog');
const projectDialogOpeners = document.querySelectorAll('[data-project-open]');
const projectDialogClose = document.querySelector('[data-project-close]');

function openProjectDialog(projectId) {
  if (!(projectDialog instanceof HTMLDialogElement)) return;

  const project = projectData[projectId];
  if (!project) return;

  const image = projectDialog.querySelector('[data-project-modal-image]');
  const showcase = projectDialog.querySelector('[data-project-modal-showcase]');
  const tags = projectDialog.querySelector('[data-project-modal-tags]');
  const date = projectDialog.querySelector('[data-project-modal-date]');
  const title = projectDialog.querySelector('[data-project-modal-title]');
  const intro = projectDialog.querySelector('[data-project-modal-intro]');
  const principle = projectDialog.querySelector('[data-project-modal-principle]');
  const development = projectDialog.querySelector('[data-project-modal-development]');
  const content = projectDialog.querySelector('[data-project-modal-content]');

  if (image instanceof HTMLImageElement) {
    image.src = project.image;
    image.alt = `${project.title} 專案主視覺展示`;
  }

  if (showcase instanceof HTMLImageElement) {
    showcase.src = project.showcase;
    showcase.alt = `${project.title} 專案網站視覺呈現`;
  }

  if (tags) tags.innerHTML = project.tags.map((tag) => `<li>${tag}</li>`).join('');

  if (date instanceof HTMLTimeElement) {
    date.textContent = project.date;
    date.dateTime = project.dateTime;
  }

  if (title) title.textContent = project.title;
  if (intro) intro.textContent = project.intro;
  if (principle) principle.textContent = project.principle;
  if (development) development.textContent = project.development;
  if (content) content.textContent = project.content;

  projectDialog.showModal();
}

if (projectDialog instanceof HTMLDialogElement) {
  projectDialogOpeners.forEach((button) => {
    button.addEventListener('click', () => {
      openProjectDialog(button.getAttribute('data-project-open'));
    });
  });

  projectDialogClose?.addEventListener('click', () => {
    projectDialog.close();
  });

  projectDialog.addEventListener('click', (event) => {
    if (event.target === projectDialog) {
      projectDialog.close();
    }
  });

  projectDialog.addEventListener('cancel', () => {
    projectDialog.close();
  });

  const params = new URLSearchParams(window.location.search);
  const projectIdFromUrl = params.get('project');
  if (projectIdFromUrl) {
    window.addEventListener('load', () => openProjectDialog(projectIdFromUrl));
  }
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
    duration: 720,
    easing: 'ease-out-cubic',
    once: true,
    offset: 80
  });
}
