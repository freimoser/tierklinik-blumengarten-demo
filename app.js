const CLINIC = 'https://petleo.app/?iframe=true&group=100&lang=de&redirect_url=/clinic/f4b05547-6e25-4b68-9871-9a59d8bf0893/branch/1/';

const SERVICES = {
  termin: CLINIC + 'book-appointment/',
  registrierung: CLINIC + 'check-in/?register=true',
  ausweis: CLINIC + 'passport-registration/',
};

// Every service link opens PetLeo in a new tab; the URLs live only here.
for (const link of document.querySelectorAll('a[data-open]')) {
  link.href = SERVICES[link.dataset.open];
  const hint = document.createElement('span');
  hint.className = 'sr-only';
  hint.textContent = ' (öffnet in neuem Tab)';
  link.append(hint);
}

// Deep links like #termin forward to the service. Browsers block new tabs
// without a click, so this happens in the same tab.
function openFromHash() {
  const url = SERVICES[location.hash.slice(1)];
  if (url) location.href = url;
}
window.addEventListener('hashchange', openFromHash);
openFromHash();
