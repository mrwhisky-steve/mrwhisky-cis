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

function legacyCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  let ok = false;
  try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
  document.body.removeChild(ta);
  return ok;
}

function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }
  return new Promise((resolve, reject) => {
    legacyCopy(text) ? resolve() : reject(new Error('legacy copy failed'));
  });
}

function copyAssetUrl(button, path) {
  const url = `${window.location.origin}${window.location.pathname.replace(/\/[^\/]*$/, '/')}${path}`;
  const original = button.textContent;
  copyToClipboard(url).then(
    () => showCopied(button, original),
    (err) => {
      console.error('複製失敗：', err);
      alert('複製失敗，請手動複製：\n' + url);
    }
  );
}

function copyText(button, text) {
  const original = button.textContent;
  copyToClipboard(text).then(
    () => showCopied(button, original),
    (err) => {
      console.error('複製失敗：', err);
      alert('複製失敗，請手動複製：\n' + text);
    }
  );
}
