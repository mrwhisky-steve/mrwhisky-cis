/**
 * Mr.Whisky CIS — Copy interactions
 * 用於：素材 URL 複製、HEX 色碼複製
 */

function showCopied(button, originalText) {
  button.textContent = '✓ 已複製';
  button.classList.add('copied');
  setTimeout(() => {
    button.textContent = originalText;
    button.classList.remove('copied');
  }, 1500);
}

function copyAssetUrl(button, path) {
  const url = `${window.location.origin}${window.location.pathname.replace(/\/[^\/]*$/, '/')}${path}`;
  const original = button.textContent;
  navigator.clipboard.writeText(url).then(
    () => showCopied(button, original),
    (err) => {
      console.error('複製失敗：', err);
      alert('複製失敗，請手動複製：\n' + url);
    }
  );
}

function copyText(button, text) {
  const original = button.textContent;
  navigator.clipboard.writeText(text).then(
    () => showCopied(button, original),
    (err) => {
      console.error('複製失敗：', err);
      alert('複製失敗，請手動複製：\n' + text);
    }
  );
}
