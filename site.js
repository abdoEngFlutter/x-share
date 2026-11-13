(() => {
  const toast = document.getElementById('toast');
  let timeout;
  function notify(message) { toast.textContent = message; toast.classList.add('visible'); clearTimeout(timeout); timeout = setTimeout(() => toast.classList.remove('visible'), 2600); }
  document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(button.dataset.copy); notify('تم نسخ بصمة الملف'); }
    catch { const code = button.closest('details').querySelector('code'); const range = document.createRange(); range.selectNodeContents(code); const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range); notify('حددنا البصمة لك. انسخها من القائمة.'); }
  }));
})();
