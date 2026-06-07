// 表單送出：阻止靜態頁預設送出，清空欄位並顯示送出提示。

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();
    alert('已送出，謝謝你的填寫！');
  });
});
