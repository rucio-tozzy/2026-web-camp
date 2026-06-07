// AOS 動畫初始化：統一設定全站滾動進場動畫。

if (window.AOS) {
  window.AOS.init({
    duration: 720,
    easing: 'ease-out-cubic',
    once: true,
    offset: 80
  });
}
