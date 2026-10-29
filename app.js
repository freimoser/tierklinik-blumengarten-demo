const CLINIC = 'https://petleo.app/?iframe=true&group=0&lang=de&redirect_url=/clinic/93dad0baf7ea629302991bb3dc63558cef464b6125e487032b96c11e75548f7a/branch/1/';

const SERVICES = {
  termin: { title: 'Termin buchen', url: CLINIC + 'book-appointment/' },
  registrierung: { title: 'Kundenregistrierung', url: CLINIC + 'check-in/?register=true' },
  ausweis: { title: 'Heimtierausweis ausfüllen und senden', url: CLINIC + 'passport-registration/' },
};

const modal = document.getElementById('modal');
const frame = document.getElementById('modal-frame');
const title = document.getElementById('modal-title');
const ext = document.getElementById('modal-ext');

function openService(key) {
  const s = SERVICES[key];
  if (!s) return;
  title.textContent = s.title;
  ext.href = s.url;
  if (frame.dataset.key !== key) {
    modal.classList.add('is-loading');
    frame.dataset.key = key;
    frame.src = s.url;
  }
  modal.showModal();
  document.documentElement.classList.add('modal-open');
}

frame.addEventListener('load', () => modal.classList.remove('is-loading'));

document.addEventListener('click', (e) => {
  const opener = e.target.closest('[data-open]');
  if (opener) {
    e.preventDefault();
    openService(opener.dataset.open);
    return;
  }
  if (e.target.closest('[data-close]') || e.target === modal) modal.close();
});

modal.addEventListener('close', () => document.documentElement.classList.remove('modal-open'));

// Deep links like #termin, #registrierung, #ausweis open the matching service directly.
function openFromHash() {
  const key = location.hash.slice(1);
  if (SERVICES[key]) openService(key);
}
window.addEventListener('hashchange', openFromHash);
openFromHash();
